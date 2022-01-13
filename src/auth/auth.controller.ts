/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  Controller,
  Post,
  UseGuards,
  Get,
  Request,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { PermissionsService } from '../permissions/permissions.service';
import { UserDeco } from '../core/deocrators/user.decorator';
import { User } from '../core/entities/user';
import { UserDto } from '../core/entities/DTO/auth';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private permsService: PermissionsService,
  ) {}

  @Post('login')
  async login(@Request() req:any, @Res() res:any) {
    const output = await this.authService.login(req.body);
    if (output) {
      res.send(output);
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send('FUCK YOU kek /s ');
    }
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req:any, @UserDeco() user: User) {
    // const roles = await this.userService.getRoles(user.userId.toString());
    return new UserDto(user);
  }
}
