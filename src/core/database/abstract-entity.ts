import { PrimaryGeneratedColumn } from 'typeorm'
import { classToPlain} from 'class-transformer'

import {
  BaseEntity
} from 'typeorm'
import { createHmac } from 'crypto'


export function hashIt(params: string) {
  const hashed = createHmac('sha256', params).digest('hex')
  return hashed
}

export function toJSON(entity: any) {
  return classToPlain(entity)
}

export class PrimaryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  toJSON() {
    return toJSON(this)
  }
}

