import path from "path"
import express from "express"

const ROUTER = express.Router()
const CLIENT = path.resolve(process.env.CLIENT!)

ROUTER.use(express.static(CLIENT))

ROUTER.get("/*", (_, res) => {
    res.sendFile(path.join(CLIENT, "index.html"))
})

export default ROUTER
