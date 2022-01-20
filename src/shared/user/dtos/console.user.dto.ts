/**
 * @author [Fazlul Kabir Shohag]
 * @email [shohag.fks@gmail.com]
 * @create date 2021-04-19 14:28:12
 * @modify date 2021-04-19 14:28:12
 * @desc [description]
 */
import { IsEmail, IsNotEmpty } from 'class-validator';
import { AwesomeDto } from 'src/core/base/dto/Awesome.dto';

export class ConsoleUserDto extends AwesomeDto {
    @IsNotEmpty()  @IsEmail()  email: string;
    @IsNotEmpty()  password: string;
}