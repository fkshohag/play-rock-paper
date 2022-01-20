/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */
import { Global, Module } from '@nestjs/common';
import ConfigService from '../services/config.service';

@Global()
@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService(`env/${process.env.NODE_ENV || 'development'}.env`),
        },
    ],
    exports: [ConfigService],
})
export default class ConfigModule {
}