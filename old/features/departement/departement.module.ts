import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';
import {
  Departementpermission,
  Departementpermissionrole,
  Departementrole,
  Departementstaff,
} from '@core/data/models/permissions';
import { User, Departement } from '@core/data';
import { Group } from '@core/data/group';
import { Level } from '@core/data/models';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Departement,
      Group,
      Departementstaff,
      Departementpermission,
      Departementrole,
      Departementpermissionrole,
      Level,
    ]),
  ],
  controllers: [DepartementController],
  providers: [DepartementService],
})
export class DepartementModule {}
