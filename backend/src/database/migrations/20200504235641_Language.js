
exports.up = function (knex) {
    return knex.schema.createTable('Language', function (table) {
        table.increments().primary();
        table.string('name').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Language')
};
