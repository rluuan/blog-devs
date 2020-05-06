const conn = require('../database/connection')
const test = true

module.exports = {

    async index(req, res) {

        const { title = '', page = 1 } = req.query

        const user = await conn('article')
        .select('article.*')
        .where('title', 'like', `%${title}%`)
        .limit(5)
        .offset((page - 1) * 5)

        return res.json(user)
    },

    async create(req, res) {
        
        const { userId, languageId, title, description } = req.body

        const user = await conn('user')
        .select('user.id')
        .where('id', '=', userId)

        if (user < 1 && ! test) {
            return res.json('Not found user')
        }

        const language = await conn('language')
        .select('language.id')
        .where('id', '=', languageId)

        if (language < 1 && ! test) {
            return res.json('Not found language')
        }

        const [id] = await conn('article')
        .insert({
            userId,
            languageId,
            title,
            description
        })

        return res.json({id})
    }
}