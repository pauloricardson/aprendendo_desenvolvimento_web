import express from 'express'
import UsersControllers from '../controllers/users.js'

const usersRouter = express.Router()

const UsersControllers = new UsersControllers()


export default usersRouter