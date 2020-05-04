const routes = require('express').Router()

const User = require("./models/User")

routes.post('/user', async (req, res) => {

    const name = 'Rodrigo'
    const username = 'Luan'
    const password = '12345'
    const email = 'rodrigoluanx@gmail.com'

    const user = await User.create({
        name,
        username,
        password,
        email
    })

    return res.json({done: 'feito'})
})

module.exports = routes