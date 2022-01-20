import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AwesomeService } from 'src/core/base/services/Awesome.service';
import { Repository } from 'typeorm';
import { ChallengeDto } from '../../dtos/challenge.dto';
import Challenge from '../../entitys/challenges.entity';

@Injectable()
export class ChallengeService extends AwesomeService<Challenge, ChallengeDto> {
    constructor(
		@InjectRepository(Challenge)
		private readonly challengeRepository: Repository<Challenge>) {
		super(challengeRepository);
	}
}
