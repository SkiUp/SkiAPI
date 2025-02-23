import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departement } from '@core/data';
import { Group } from '@core/data/group';
import { Level } from '@core/data/models';
import {
  Departementstaff,
  Departementpermissionrole,
  Departementpermission,
} from '@core/data/models/permissions';
import { Studentgroup } from '@core/data/student_group';
import { Studentstatus } from '@core/data/student_status';
import { GroupService } from '../groups/group.service';
import { LevelsService } from '../levels/levels.service';
import { PermissionsService } from '../permissions/permissions.service';

import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  controllers: [StudentsController],
  imports: [
    TypeOrmModule.forFeature([
      Studentstatus,
      Studentgroup,
      Departementstaff,
      Departement,
      Group,
      Departementpermissionrole,
      Departementpermission,
      Level,
    ]),
  ],
  providers: [LevelsService, StudentsService, PermissionsService, GroupService],
})
export class StudentsModule {}
