import Knex from 'knex';

export async function up(knex: Knex){
    //alterações
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();

    });
}

export async function down(knex: Knex){
    // quando queremos voltar ao ponto anterior
    return knex.schema.dropTable('users');
}