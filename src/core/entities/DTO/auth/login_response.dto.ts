import { UserDto } from './user.dto';

export class LoginResponse {
  employe: UserDto;
  token: string;

  constructor(user: UserDto, token: string) {
    this.employe = user;
    this.token = token;
  }
}
