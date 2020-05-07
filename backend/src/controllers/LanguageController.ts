const conn = require('../database/connection')
import { Request, Response } from 'express'

module.exports = {

    async index(req: Request, res: Response) {
        const { page = 1 } = req.query

        const user = await conn('language')
        .select('language.*')
        .orderBy('name')

        return res.json(user)
    },

    async create(req: Request, res: Response) {

        const { name } = req.headers
    
        const [id] = await conn('language').insert({
            name
        })
        return res.json({id})
    }
}