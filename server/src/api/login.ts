import express from "express"
import cookie from "cookie"
import jwt from "jsonwebtoken"
import users from "../db/users"

interface ReqBody {
    username: string,
    password: string
}

const ROUTER = express.Router()
const JWT_KEY = process.env.JWT_KEY!

ROUTER.post("/login", async (req, res) => {
    const body: ReqBody = req.body

    try {
        const query = await users.find(body)
        if (query.length == 0) {
            res.json(JSON.stringify({
                "status": "failed",
                "msg": "invalid username/password"
            }))
            return;
        }

        // make token cookie
        const token = jwt.sign({ username: body.username }, JWT_KEY)
        const token_cookie = cookie.serialize("token", token)

        // response
        res.setHeader("Set-Cookie", token_cookie)
        res.redirect("/")
    } catch (err) {
        console.error(`error: ${JSON.stringify(err)}`)
        console.error(`error: ${err}`)
    }
})

export default ROUTER
