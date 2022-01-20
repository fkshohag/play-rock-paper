import { Repository, ObjectLiteral, FindOneOptions, BaseEntity, FindConditions } from 'typeorm'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'
// Deleted all entities from table 
export function clearTable<A>(r: Repository<A>) {
    return r.clear()
}
export function save<A>(a: A, r: Repository<A>): Promise<A> {
    return r.save(a)
}

export function entityNotFoundEx(o: ObjectLiteral) {
    const message = `There is no entity in existence with ${Object.keys(o)[0]}:${Object.values(o)[0]}`
    throw new NotFoundException(message)
}

export function duplicateEntityEx(o: ObjectLiteral, customeMessage = '') {
    const message = `There already exists an entity with ${Object.keys(o)[0]}:${Object.values(o)[0]}.` + customeMessage
    throw new BadRequestException(message)
}

export function badReq(s: string) {
    throw new BadRequestException(s)
}


export async function shouldNotExists<A>(o: ObjectLiteral, r: Repository<A>, customeMessage = '') {
    const exists = await r.findOne(o)

    if (exists) {
        duplicateEntityEx(o, customeMessage)
    }
    return exists
}

export async function shouldExists<A>(o: ObjectLiteral, r: Repository<A>) {
    const exists = await r.findOne(o)

    if (!exists) {
        entityNotFoundEx(o)
    }

    return exists
}

export async function returnIfexists<A>(o: ObjectLiteral, r: Repository<A>, throwErrorIfNotFount = true) {
    const exists = await r.findOne(o)

    if (!exists) {
        if (throwErrorIfNotFount) {
            entityNotFoundEx(o)
        }
    }
    return exists
}



export async function updateIfexists<A extends BaseEntity>(id: number, r: Repository<A>, partialEntity: QueryDeepPartialEntity<A>) {
    const exists = await returnIfexists({ id }, r)

    r.update(id, partialEntity)


    await exists.reload()
    return exists
}
export async function updateMany<A extends BaseEntity>(f: FindConditions<A>, r: Repository<A>, partialEntity: QueryDeepPartialEntity<A>) {
    return r.update(f, partialEntity)
}


export async function deleteIfexists<A>(id: number, r: Repository<A>) {
    const exists = await returnIfexists({ id }, r)
    await r.delete(id)
    return exists
}


export async function returnIfexistsRel<A>(id: number, relations: string[], r: Repository<A>) {
    const exists = await r.findOne(id, { relations })

    if (!exists) {
        const message = `There is no entity found with id:${id}`
        throw new NotFoundException(message)
    }

    return exists
}

export async function findByRel<A>(o: FindOneOptions<A>, r: Repository<A>) {
    const exists = await r.findOne(o)

    if (!exists) {
        entityNotFoundEx(o)
    }
    return exists
}
