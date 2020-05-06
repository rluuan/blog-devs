const routes = require('express').Router()
const { Joi, celebrate, Segments } = require('celebrate')


const UserController = require('./controllers/UserController')
const ArticleController = require('./controllers/ArticleController')

/* 
    Handle Users
*/

routes.get('/user', UserController.index)
routes.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
    }).unknown()
}), UserController.create)

/* 
    Handle Articles
*/

routes.get('/article', ArticleController.index)
routes.post('/article', ArticleController.create)


module.exports = routes