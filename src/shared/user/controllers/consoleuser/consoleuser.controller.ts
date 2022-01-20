/**
 * @author [Fazlul Kabir Shohag]
 * @email [shohag.fks@gmail.com]
 * @create date 2021-04-10 17:06:52
 * @modify date 2021-04-10 17:06:52
 * @desc [description]
 */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AwesomeController } from 'src/core/base/controllers/AwesomeController';
import { ConsoleUserDto } from '../../dtos/console.user.dto';
import ConsoleUser from '../../entitys/console.user.entity';
import { ConsoleuserService } from '../../services/consoleuser/consoleuser.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class ConsoleuserController extends AwesomeController<ConsoleUser, ConsoleUserDto>{
	constructor(private readonly usersService: ConsoleuserService) {
		super(usersService)
	}

	@Post('register')
	@ApiResponse({ status: 201, description: 'The record has been successfully created.' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	@ApiResponse({ status: 400, description: 'Bad Request.' })
	async create(@Body() entity: ConsoleUserDto): Promise<ConsoleUser> {
		entity.password = await bcrypt.hash(entity.password, 10);
		const newUser = await super.create(entity);
		delete newUser.password;
		return new ConsoleUser(newUser);
	}
}
