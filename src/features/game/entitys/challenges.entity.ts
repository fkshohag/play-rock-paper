import AwesomeEntity from "src/core/base/entitys/Awesome.entity";
import ConsoleUser from "src/shared/user/entitys/console.user.entity";
import { Entity, Column, OneToOne, JoinColumn } from "typeorm";

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 03:02:58
 * @modify date 2022-01-16 03:02:58
 * @desc [description]
 */
@Entity('challenges')
export default class Challenge extends AwesomeEntity {

      @OneToOne(() => ConsoleUser)
      @JoinColumn({name: 'from_user_id'})
      from_user: ConsoleUser;

      @OneToOne(() => ConsoleUser)
      @JoinColumn({name: 'to_user_id'})
      to_user: ConsoleUser;

      @Column({ select: true, type: "varchar", nullable: false })
      option: string
}