import {Module} from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import {JwtStrategy} from "./jwt.strategy"
import { PassportModule } from '@nestjs/passport'
import AuthController from './auth.controller'
import { UserModule } from 'src/shared/user/user.module'

/**
 * @author [Md Shohag]
 * @email [shohag.fks@mail.com]
 * @create date 2022-01-16 02:45:49
 * @modify date 2022-01-16 02:45:49
 * @desc [description]
 */

@Module({
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: process.env.EXPIRESIN },
    }),],
  exports: [AuthService]
})
export class AuthModule {}
