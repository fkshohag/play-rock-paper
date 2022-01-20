import { Exclude } from "class-transformer";
import AwesomeEntity from "src/core/base/entitys/Awesome.entity";
import { Entity, Column, ManyToMany, JoinTable } from "typeorm";

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 03:02:58
 * @modify date 2022-01-16 03:02:58
 * @desc [description]
 */


@Entity('users')
export default class ConsoleUser extends AwesomeEntity {
      @Column({ type: 'varchar', nullable: false, unique: true })
      email: string

      @Column({ select: true, type: "varchar", nullable: false })
      @Exclude()
      password: string

      @Column({ type: 'boolean', default: true })
      is_verified: boolean;

      constructor(partial: Partial<ConsoleUser>) {
            super()
            Object.assign(this, partial);
      }
}