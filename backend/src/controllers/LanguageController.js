const conn = require('../database/connection')

module.exports = {

    async index(req, res) {
        const { page = 1 } = req.query

        const user = await conn('language')
        .select('language.*')
        .orderBy('name')

        return res.json(user)
    },

    async create(req, res) {

        const { name } = req.headers
    
        const [id] = await conn('language').insert({
            name
        })
        return res.json({id})
    }
}