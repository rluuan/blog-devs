const mongoose = require('mongoose')

const tools = require('../global')

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [tools.validateEmail, 'Email invalid, try again.']
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    
})
module.exports = mongoose.model('User', UserSchema)