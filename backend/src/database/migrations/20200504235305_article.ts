import Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('Article', function(table: Knex.TableBuilder) {


    table.increments().primary();
    table.string('userId').notNullable()
    table.string('languageId').notNullable()
    table.foreign('userId').references('id').inTable('User')
    table.foreign('languageId').references('id').inTable('Language')
    table.string('title').notNullable()
    table.string('description').notNullable()
  })
};

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('Article')
};
