
const User = require("../models/User")

module.exports = {

    async create(req, res) {

        const { email: email, password } = req.headers

        try {

            const user = await User.create({
                password,
                email
            })
            return res.json(user)
        } catch (error) {
            return res.json({
                error: `failure in the process to create the user in the database. ${error}`
            })
        }
    }
}