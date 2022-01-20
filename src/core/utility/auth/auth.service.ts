import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import {IAuth} from "./interfaces/auth.interface"

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */
@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) {}

    async getToken(email: string, id: string): Promise<any> {
        const payload = { email, id } as IAuth
        return this.jwtService.sign(payload)
    }
}
