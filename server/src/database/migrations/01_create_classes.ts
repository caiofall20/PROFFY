import Knex from 'knex';

export async function up(knex: Knex){
    //alterações
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

    });
}

export async function down(knex: Knex){
    // quando queremos voltar ao ponto anterior
    return knex.schema.dropTable('classes');
}