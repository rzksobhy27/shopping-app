import express from "express"

interface ReqBody {
    username: string,
    password: string
}

const ROUTER = express.Router()

ROUTER.post("/login", (req, res) => {
    const body: ReqBody = req.body
})

export default ROUTER
