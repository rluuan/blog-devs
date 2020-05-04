const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('User', UserSchema)