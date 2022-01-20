import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import IEnvConfigInterface from '../interfaces/env-config.interface';

@Injectable()
class ConfigService {
    private readonly envConfig: IEnvConfigInterface;

    constructor(filePath: string) {
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = config
    }

    public getTypeORMConfig(): TypeOrmModuleOptions {
        const baseDir = path.join(__dirname, '../');
        const entitiesPath = `${baseDir}${this.envConfig.TYPEORM_ENTITIES}`;
        const migrationPath = `${baseDir}${this.envConfig.TYPEORM_MIGRATIONS}`;
        const type: any = this.envConfig.TYPEORM_CONNECTION;
        return {
            type,
            host: this.envConfig.TYPEORM_HOST,
            username: this.envConfig.TYPEORM_USERNAME,
            password: this.envConfig.TYPEORM_PASSWORD,
            database: this.envConfig.TYPEORM_DATABASE,
            port: Number.parseInt(this.envConfig.TYPEORM_PORT, 10),
            logging: false,
            entities: [entitiesPath],
            migrations: [migrationPath],
            migrationsRun: this.envConfig.TYPEORM_MIGRATIONS_RUN === 'true',
            cli: {
                migrationsDir: 'src/db/migrations',
                entitiesDir: 'src/db/entities',
            },
        };
    }
}

export default ConfigService;