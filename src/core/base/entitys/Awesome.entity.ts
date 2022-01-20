import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */

class AwesomeEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({ type: 'boolean', default: false })
    is_archived: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'uuid', nullable: true })
    created_by: string;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'uuid', nullable: true })
    updated_by: string;
}

export default AwesomeEntity;