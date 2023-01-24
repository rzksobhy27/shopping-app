import dotenv from "dotenv"
dotenv.config()

import express from "express"
import bodyParser from "body-parser"
import api from "./api"
import client from "./client"
import { connect } from "./db"

// connect to database
connect()

const app = express()
const PORT = process.env.PORT!

// parse JSON req body
app.use(bodyParser.json())

// api
app.use("/api", api)

// serve client app
app.use("/", client)

app.listen(PORT, () => {
    console.log(`App is listenning on port: ${PORT}`)
})
