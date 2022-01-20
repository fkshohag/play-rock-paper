/**
 * @author [Fazlul Kabir Shohag]
 * @email [shohag.fks@gmail.com]
 * @create date 2021-04-10 17:06:41
 * @modify date 2021-04-10 17:06:41
 * @desc [description]
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeController } from './controllers/challenge/challenge.controller';
import Challenge from './entitys/challenges.entity';
import { ChallengeService } from './services/challenge/challenge.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Challenge])
  ],
  controllers: [
    ChallengeController,
  ],
  providers: [ChallengeService],
  exports:[]
})
export class GameModule { }
