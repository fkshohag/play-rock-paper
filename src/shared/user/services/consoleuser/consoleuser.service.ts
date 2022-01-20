/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 20:25:31
 * @modify date 2022-01-16 20:25:31
 * @desc [description]
 */

import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { AwesomeService } from 'src/core/base/services/Awesome.service';
import { LoginUserDto } from 'src/core/utility/auth/login.user.dto';
import { Repository } from 'typeorm';
import { ConsoleUserDto } from '../../dtos/console.user.dto';
import ConsoleUser from '../../entitys/console.user.entity';
import * as bcrypt from 'bcrypt';
import AwesomePaginationOpton from 'src/core/base/interfaces/AwesomePagination.interface';
import { paginateRaw, Pagination } from 'nestjs-typeorm-paginate';
import AwesomeEntity from 'src/core/base/entitys/Awesome.entity';
import QueryMixin from 'src/core/utility/mixins/query/QueryMixin';

@Injectable()
export class ConsoleuserService extends AwesomeService<ConsoleUser, ConsoleUserDto> {
	constructor(
		@InjectRepository(ConsoleUser)
		private readonly usersRepository: Repository<ConsoleUser>) {
		super(usersRepository);
	}

	async getAll(options: AwesomePaginationOpton): Promise<Pagination<AwesomeEntity>> {
        let queryBuilder  = this.usersRepository
        .createQueryBuilder()
        .select('id,email,is_verified')
        queryBuilder = options.filters ? QueryMixin.filterQuery(queryBuilder, options.filters) : queryBuilder
        queryBuilder = options.limit ? queryBuilder.limit(options.limit) : queryBuilder
        return paginateRaw<AwesomeEntity>(queryBuilder, options);
    }

	public async findByEmail(email: string): Promise<ConsoleUser> {
		const user = await this.usersRepository
		.findOne({ where: { email: email } });
		return user;
	}


	public async login(credentials: LoginUserDto): Promise<ConsoleUser> {
		const user = await this.findByEmail(credentials.email);

		if (!user) {
			throw new HttpException({
				error: 'User',
				message: `User not found`
			}, HttpStatus.NOT_FOUND);
		}

		const isPasswordMatching = await bcrypt.compare(credentials.password, user.password);
		if (!isPasswordMatching) {
			throw new NotFoundException(`User doesn't exists`);
		}

		if (!user.is_verified) {
			throw new HttpException({
				error: 'User',
				message: `User is not verified`,
			}, HttpStatus.NOT_FOUND);
		}
		return user;
	}
}
