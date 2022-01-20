import { Controller } from '@nestjs/common';
import { AwesomeController } from 'src/core/base/controllers/AwesomeController';
import { ChallengeDto } from '../../dtos/challenge.dto';
import Challenge from '../../entitys/challenges.entity';
import { ChallengeService } from '../../services/challenge/challenge.service';

@Controller('challenge')
export class ChallengeController extends AwesomeController<Challenge, ChallengeDto> {
    constructor(private readonly challengeService: ChallengeService) {
		super(challengeService)
	}
}