
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    token: String,
    salt: String,
    status: {
        type: String,
        default: "active"
    }
})

userSchema.set('timestamps', true)
module.exports = mongoose.model('user', userSchema)