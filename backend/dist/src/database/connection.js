"use strict";
var knex = require('knex');
var configuration = require('../../knexfile');
var config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
var connection = knex(config);
module.exports = connection;
