import { BadGatewayException } from '@nestjs/common';
import { Repository } from 'typeorm';
import AwesomeEntity from '../entitys/Awesome.entity';
import AwesomeIQInterface from '../interfaces/AwesomeIQ.interface';
import { InjectRepository } from '@nestjs/typeorm';
import {
    Pagination,
    paginateRaw
  } from 'nestjs-typeorm-paginate';
import AwesomePaginationOpton from '../interfaces/AwesomePagination.interface';
import QueryMixin from 'src/core/utility/mixins/query/QueryMixin';
import { AwesomeDto } from '../dto/Awesome.dto';

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */

export class AwesomeService<T extends AwesomeEntity,  DTO extends AwesomeDto> implements AwesomeIQInterface<T, DTO>{
    constructor(
        @InjectRepository(AwesomeEntity)
        private readonly genericRepository: Repository<T>) { }

    create(entity: any): Promise<number> {
        try {
            return new Promise<number>((resolve, reject) => {
                this.genericRepository.save(entity)
                    .then(created => resolve(created))
                    .catch(err => reject(err))
            })
        }
        catch (error) {
            throw new BadGatewayException(error);
        }
    }

    async getAll(options: AwesomePaginationOpton): Promise<Pagination<AwesomeEntity>> {
        let queryBuilder  = this.genericRepository
        .createQueryBuilder()
        .select('*')
        queryBuilder = options.filters ? QueryMixin.filterQuery(queryBuilder, options.filters) : queryBuilder
        queryBuilder = options.limit ? queryBuilder.limit(options.limit) : queryBuilder
        return paginateRaw<AwesomeEntity>(queryBuilder, options);
    }

    get(id: number): Promise<T> {
        try {

        } catch (error) {
            throw new BadGatewayException(error);
        }
        return <Promise<T>>this.genericRepository.findOne(id);
    }

    delete(id: number) {
        try {
            this.genericRepository.delete(id)
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    update(entity: any): Promise<any> {
        try {
            return new Promise<any>((resolve, reject) => {
                this.genericRepository.findOne(entity.id)
                    .then(responseGet => {
                        try {
                            if (responseGet == null) reject('Not existing')
                            let retrievedEntity: any = responseGet as any
                            this.genericRepository.save(retrievedEntity)
                                .then(response => resolve(response))
                                .catch(err => reject(err))
                        }
                        catch (e) {
                            reject(e)
                        }
                    })
                    .catch(err => reject(err))
            })
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }
}