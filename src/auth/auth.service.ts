/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse, UserDto } from '../core/entities/DTO/auth';
import { User } from '../core/entities/user';
import { UsersService } from '../features/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async validateUser(ID: string, pass: string): Promise<User> {
    const user = await this.userService.findOne(ID, null);
    if (user && user.password === pass) {
      delete user.password;
      return user;
    }

    return null;
  }

  public async login(body: any) {
    const user = await this.validateUser(body.userID, body.password);
    let output: LoginResponse = <LoginResponse>{};
    const employe: UserDto = {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    if (user) {
      const payload = { username: user.id, sub: user.id };
      output = { employe, token: this.jwtService.sign(payload) };
    }

    return output;
  }
}
