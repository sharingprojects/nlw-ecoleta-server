import Knex from 'knex';

export async function up(knex: Knex) {
    //create a table
    return knex.schema.createTable('items', table=> {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('titulo').notNullable();
        
    });
}

export async function down(knex: Knex) {
   //come back (delete table)
   return knex.schema.dropTable('items');

}