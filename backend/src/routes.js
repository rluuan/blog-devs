const routes = require('express').Router()
const { Joi, celebrate, Segments } = require('celebrate')


const UserController = require('./controllers/UserController')
const ArticleController = require('./controllers/ArticleController')
const LanguageController = require('./controllers/LanguageController')

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

/* 
    Handle Language
*/
routes.get('/language', LanguageController.index)
routes.post('/language', LanguageController.create)


module.exports = routes