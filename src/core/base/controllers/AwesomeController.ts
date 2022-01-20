import { Get, Post, Delete, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import AwesomeEntity from '../entitys/Awesome.entity';
import AwesomeIQInterface from '../interfaces/AwesomeIQ.interface';
import { Pagination } from 'nestjs-typeorm-paginate';
import { AwesomeDto } from '../dto/Awesome.dto';

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */

export class AwesomeController<T extends AwesomeEntity, DTO extends AwesomeDto> {

	constructor(private readonly AwesomeIqService: AwesomeIQInterface<T, DTO>) { }

	@Get()
	@ApiResponse({ status: 200, description: 'Ok' })
	async findAll(
		@Query('filters') filters: string = "",
		@Query('selectFields') selectFields: string = "",
		@Query('includeFields') includeFields: string = "",
		@Query('excludeFields') excludeFields: string = "",
		@Query('page') page: number = 1,
		@Query('limit') limit: number = 10,
	): Promise<Pagination<AwesomeEntity>> {
		limit = limit > 100 ? 100 : limit;
		return this.AwesomeIqService.getAll({
			page,
			limit,
			route: process.env.APP_HOST,
			filters,
			selectFields,
			includeFields,
			excludeFields
		});
	}

	@Get(':id')
	@ApiResponse({ status: 200, description: 'Entity retrieved successfully.' })
	@ApiResponse({ status: 404, description: 'Entity does not exist' })
	async findById(@Param('id') id: number): Promise<T> {
		return this.AwesomeIqService.get(id)
	}

	@Post()
	@ApiResponse({ status: 201, description: 'The record has been successfully created.' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	@ApiResponse({ status: 400, description: 'Bad Request.' })
	async create(@Body() entity: DTO): Promise<any> {
		return this.AwesomeIqService.create(entity);
	}

	@Delete(':id')
	@ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
	@ApiResponse({ status: 400, description: 'Bad Request.' })
	async delete(@Param('id') id: number) {
		this.AwesomeIqService.delete(id);
	}

	@Put()
	@ApiResponse({ status: 400, description: 'Bad Request.' })
	@ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
	async update(@Body() entity: DTO): Promise<T> {
		return this.AwesomeIqService.update(entity);
	}

}
