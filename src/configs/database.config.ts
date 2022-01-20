import { equals } from 'class-validator'
import databaseEntitys from 'src/schema';

function parseBoolean(bool: string) {
    if (equals('true', bool)) {
        return true
    }
    return false
}

export function getDefaultDatabaseOption() {
    const config = {
        type: process.env.TYPEORM_CONNECTION,
        host: process.env.TYPEORM_HOST,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        port: Number.parseInt(process.env.TYPEORM_PORT, 10),
        synchronize: parseBoolean(process.env.TYPEORM_SYNCRONIZE),
        dropSchema: parseBoolean(process.env.TYPEORM_DROP_SCHEMA),
        entities: databaseEntitys,
    }
    return config
}