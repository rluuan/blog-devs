const routes = require('express').Router()
const { Joi, celebrate, Segments } = require('celebrate')


const UserController = require('./controllers/UserController')

routes.post('/user', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required().min(8)
    }).unknown()
}), UserController.create)

module.exports = routes