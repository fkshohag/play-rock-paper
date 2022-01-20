import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { getDefaultDatabaseOption } from './configs/database.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './core/utility/auth/auth.module';
import { DynamicModule } from '@nestjs/common';
import awesomeConfig from './ormconfig';
import { UserModule } from './shared/user/user.module';
import { GameModule } from './features/game/game.module';

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */


export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.

  return TypeOrmModule.forRoot(awesomeConfig);
}


@Module({
  
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getDefaultDatabaseOption() as TypeOrmModuleOptions),
    AuthModule,
    UserModule,
    GameModule
  ],
  
  controllers: [],
  
  providers: []
})
export class AppModule {}
