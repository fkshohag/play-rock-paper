import { ConnectionOptions } from 'typeorm';
import { equals } from 'class-validator'
import databaseEntitys from './schema';

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:59:18
 * @modify date 2022-01-16 02:59:18
 * @desc [description]
 */


function parseBoolean(bool: string) {
    if (equals('true', bool)) {
        return true
    }
    return false
}


// Check typeORM documentation for more information.
const awesomeConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST || 'localhost',
    username: 'rockadmin',
    password: 'rock^back@lik',
    database: 'rock',
    port: Number.parseInt(process.env.TYPEORM_PORT, 10),
    synchronize: parseBoolean(process.env.TYPEORM_SYNCRONIZE),
    dropSchema: parseBoolean(process.env.TYPEORM_DROP_SCHEMA),
    entities: databaseEntitys,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    logging: true,
    logger: 'file',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/migrations',
    },
};

export = awesomeConfig;