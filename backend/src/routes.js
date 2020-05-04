const routes = require('express').Router()

const User = require("./models/User")

routes.post('/user', async (req, res) => {

    const { email: email, password } = req.headers

    try {

        const user = await User.create({
            password,
            email
        })
        return res.json({done: 'OK'})
    } catch (error) {

        console.log(`failure in the process to create the user in the database`)
        return res.json({done: 'FAIL'})
    }

    

    
})

module.exports = routes