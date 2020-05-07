import Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('Language', function (table) {
        table.increments().primary();
        table.string('name').notNullable()
    })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('Language')
};
