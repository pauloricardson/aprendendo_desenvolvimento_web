import express from 'express'
import UsersControllers from '../controllers/users.js'

const usersRouter = express.Router()

const UsersControllers = new UsersControllers()

usersRouter.get('/', async (req, res) => {
    const { success, statusCode, body } = await UsersControllers()

    res.status(200).send({ success, statusCode, body })
})

export default usersRouter