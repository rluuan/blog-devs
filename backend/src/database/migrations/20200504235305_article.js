
exports.up = function(knex) {
  return knex.schema.createTable('Article', function(table) {


    table.increments().primary();
    table.string('userId').notNullable()
    table.string('languageId').notNullable()
    table.foreign('userId').references('id').inTable('User')
    table.foreign('languageId').references('id').inTable('Language')
    table.string('title').notNullable()
    table.string('description').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Article')
};
