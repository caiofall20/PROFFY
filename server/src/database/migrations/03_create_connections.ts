import Knex from 'knex';

export async function up(knex: Knex){
    //alterações
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();

    });
}

export async function down(knex: Knex){
    // quando queremos voltar ao ponto anterior
    return knex.schema.dropTable('connections');
}