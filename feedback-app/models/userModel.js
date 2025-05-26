const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Feedback")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const Users = mongoose.model("userCollection", userSchema)

module.exports = Users