import express from 'express'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import crypto from 'crypto'
import { Mongo } from '../database/mongo.js'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongodb'

const collectionName = 'users'

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, callback) => {
    const user = await Mongo.db 
    .collection(collectionName)
    .findOne({ email: email })

    if (!user) {
        return callback(null, false)
    }

    const saltBuffer = user.salt.saltBuffer

    crypto.pbkdf2(password, saltBuffer, 310000, 16, 'sha125', (err, hashedPassword) => {
        if (err) {
            return callback(null, false)
        }

        const userPasswordBuffer = Buffer.from(user.password.buffer)

        if (!crypto.timingSafeEqual(userPasswordBuffer, hashedPassword)) {
            return callback(null, false)
        }

        const { password, salt, ...rest } = user

        return callback(null, rest)
    })
}))

const authRouter = express.Router()

authRouter.post('/signup', async (req, res) => {
    const checkUser = await Mongo.db
    .collection(collectionName)
    .findOne({ email: req.body.email })

    if (checkUser) {
        return res.status(500).send({ 
            success: false,
            statusCode: 500,
            body: {
                text: 'User already exists'
            }
         })
    }

    const salt = crypto.randomBytes(16)
    
})