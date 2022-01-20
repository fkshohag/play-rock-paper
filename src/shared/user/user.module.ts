/**
 * @author [Fazlul Kabir Shohag]
 * @email [shohag.fks@gmail.com]
 * @create date 2021-04-10 17:06:41
 * @modify date 2021-04-10 17:06:41
 * @desc [description]
 */
import { Module } from '@nestjs/common';
import { ConsoleuserController } from './controllers/consoleuser/consoleuser.controller';
import { ConsoleuserService } from './services/consoleuser/consoleuser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConsoleUser from './entitys/console.user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ ConsoleUser])
  ],
  controllers: [
    ConsoleuserController,
  ],
  providers: [
    ConsoleuserService,
  ],
  exports:[ConsoleuserService]
})
export class UserModule { }
