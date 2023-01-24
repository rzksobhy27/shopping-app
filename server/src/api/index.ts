import express from "express"
import login from "./login"
import register from "./register"
import is_logged_in from "./is_logged_in"

const ROUTER = express.Router()

ROUTER.use(login)
ROUTER.use(register)
ROUTER.use(is_logged_in)

export default ROUTER
