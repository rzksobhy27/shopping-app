import express from "express"

interface ReqBody {
    username: string,
    password: string,
    name: {
        first: string,
        last: string
    }
}

const ROUTER = express.Router()

ROUTER.post("/register", (req, res) => {
    const body: ReqBody = req.body
})

export default ROUTER
