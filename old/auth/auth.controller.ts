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

import { UserDeco } from '../deocrators/user.decorator';
import { User } from '@core/data/user';
import { UserDto } from '@core/data/DTO/auth';

import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req: any, @Res() res: any) {
    const output = await this.authService.login(req.body);
    if (output) {
      res.send(output);
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send('FUCK YOU kek /s ');
    }
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req: any, @UserDeco() user: User) {
    return new UserDto(user);
  }
}
