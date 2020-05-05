const routes = require('express').Router()
const { Joi, celebrate, Segments } = require('celebrate')


const UserController = require('./controllers/UserController')

routes.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
    }).unknown()
}), UserController.create)

routes.get('/user', UserController.index)

module.exports = routes