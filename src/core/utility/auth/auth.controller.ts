import { Body, Controller, HttpCode, Injectable, Post } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { ConsoleuserService } from "src/shared/user/services/consoleuser/consoleuser.service";
import { AuthService } from "./auth.service";
import { JwtDto } from "./jwt.dto";
import { LoginUserDto } from "./login.user.dto";

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 04:20:09
 * @modify date 2022-01-16 04:20:09
 * @desc [description]
 */

@Controller()
export default class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: ConsoleuserService
    ) {

    }
    @Post('login')
    @HttpCode(200)
    @ApiResponse({ status: 200, description: 'OK', type: JwtDto })
    public async login(@Body() credentials: LoginUserDto): Promise<JwtDto> {
        const user = await this.userService.login(credentials);
        const token: string = await this.authService.getToken(user.email, user.id);
        return {
            expiresIn: Number(process.env.EXPIRESIN),
            accessToken: token,
            refreshToken: token
        };
    }

}