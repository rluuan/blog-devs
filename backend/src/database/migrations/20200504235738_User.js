
exports.up = function (knex) {
    return knex.schema.createTable('User', function (table) {
        table.increments().primary();
        table.string('name').notNullable()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.datetime('createAt')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('User')
};
