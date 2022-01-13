import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { User } from '../core/entities/user';
import { Departementpermissionrole } from '../core/entities/models/permissions/departement_permission_role';
import { UsersService } from '../features/users/users.service';
import { PermissionsService } from '../features/permissions/permissions.service';
import {
  Departementpermission,
  Departementrole,
  Departementstaff,
} from '../core/entities/models/permissions';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';

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
