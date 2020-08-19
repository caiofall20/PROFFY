import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true /*sqlite por padrão não sabe oque colocar nos campos vazios
                             então ele coloca null*/
});

export default db;