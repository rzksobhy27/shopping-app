import express from "express"
import login from "./login"
import register from "./register"

const ROUTER = express.Router()

ROUTER.use(login)
ROUTER.use(register)

export default ROUTER
