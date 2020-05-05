const conn = require('../database/connection')

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query

        const [count] = await conn('User')
        .count()
        res.header('X-Total-Count', count['count(*)'])

        const user = await conn('User')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'User.*'
        ])
        return res.json(user)
    },

    async create(req, res) {

        const {name, username, password, email} = req.body
        const createAt = Date.now()
    
        const [id] = await conn('User').insert({
            name,
            username,
            password,
            email,
            createAt
        })
        return res.json({id})
    }
}