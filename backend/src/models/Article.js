const mongoose = require('mongoose')
const FKHelper = require('./helpers/oreign-key-helper')

const ArticleSchema = new mongoose.Schema({
    userId: [{
		type: Schema.ObjectId,
		ref: 'User',
		validate: {
			isAsync: true,
			validator: function(v) {
				return FKHelper(mongoose.model('User'), v);
			},
			message: `User doesn't exist`
		}
	}],
    languageId: [{
		type: Schema.ObjectId,
		ref: 'Language',
		validate: {
			isAsync: true,
			validator: function(v) {
				return FKHelper(mongoose.model('Language'), v);
			},
			message: `Language doesn't exist`
		}
	}],
    title: String,
    description: String
})
module.exports = mongoose.model('Article', ArticleSchema)