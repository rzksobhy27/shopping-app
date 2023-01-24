import express from "express"
import cookie from "cookie"

const ROUTER = express.Router()

ROUTER.get("/isloggedin", (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || "")

    if (cookies["token"] == undefined) {
        res.json(JSON.stringify({
            "login_status": false,
            "msg": "user is not logged in"
        }))
        return
    }

    res.json(JSON.stringify({
        "login_status": true,
        "msg": "user is logged in"
    }))
})

export default ROUTER
