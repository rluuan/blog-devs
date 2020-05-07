import Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('User', function (table) {
        table.increments().primary();
        table.string('name').notNullable()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.dateTime('createAt')
    })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('User')
};
