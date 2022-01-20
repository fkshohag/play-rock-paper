/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-17 00:13:28
 * @modify date 2022-01-17 00:13:28
 * @desc [description]
 */

import {IsNotEmpty, IsUUID } from 'class-validator';
import { AwesomeDto } from 'src/core/base/dto/Awesome.dto';

export class ChallengeDto extends AwesomeDto {
    @IsUUID()
    @IsNotEmpty()  from_user_id: string;

    @IsUUID()
    @IsNotEmpty()  to_user_id: string;

    @IsNotEmpty()  option: string;
}