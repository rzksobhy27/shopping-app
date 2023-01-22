import mongoose from "mongoose"

const DATABASE = process.env.DATABASE!

export async function connect () {
    await mongoose.connect(DATABASE)

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}
