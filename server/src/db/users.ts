import mongoose from "mongoose"

const users_schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    }
})

const users = mongoose.model("users", users_schema)

export default users;
