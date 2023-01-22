import express from "express"
import cookie from "cookie"
import jwt from "jsonwebtoken"
import users from "../db/users"

interface ReqBody {
    username: string,
    password: string,
    name: {
        first: string,
        last: string
    }
}

const ROUTER = express.Router()
const JWT_KEY = process.env.JWT_KEY!

const UNIQUE_FIELD_EXISTS = 11000

ROUTER.post("/register", async (req, res) => {
    const body: ReqBody = req.body

    try {
        const new_user = new users(body);
        await new_user.save();

        // make token cookie
        const token = jwt.sign({username: body.username }, JWT_KEY)
        const token_cookie = cookie.serialize("token", token)

        // response
        res.setHeader("Set-Cookie", token_cookie)
        res.statusCode = 200
        res.end()
    } catch (err: any) {
        if (err.code == UNIQUE_FIELD_EXISTS) {
            res.json(JSON.stringify({
                "status": "failed",
                "msg": "username already exists!"
            }))
            return;
        }
    }
})

export default ROUTER
