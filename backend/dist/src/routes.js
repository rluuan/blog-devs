"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var routes = require('express').Router();
var celebrate_1 = require("celebrate");
var UserController = require('./controllers/UserController');
var ArticleController = require('./controllers/ArticleController');
var LanguageController = require('./controllers/LanguageController');
/*
    Handle Users
*/
routes.get('/user', UserController.index);
routes.post('/user', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        username: celebrate_1.Joi.string().required(),
        password: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required(),
    }).unknown(),
    _a)), UserController.create);
/*
    Handle Articles
*/
routes.get('/article', ArticleController.index);
routes.post('/article', ArticleController.create);
/*
    Handle Language
*/
routes.get('/language', LanguageController.index);
routes.post('/language', LanguageController.create);
module.exports = routes;
