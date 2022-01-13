import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../core/entities/user';
import { Departementpermissionrole } from '../core/entities/models/permissions/departement_permission_role';
import { UsersService } from '../users/users.service';
import { PermissionsService } from '../permissions/permissions.service';
import {
  Departementpermission,
  Departementrole,
  Departementstaff,
} from '../core/entities/models/permissions';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Departementstaff,
      Departementpermission,
      Departementrole,
      Departementpermissionrole,
    ]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.duration },
    }),
  ],
  providers: [AuthService, UsersService, JwtStrategy, PermissionsService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
