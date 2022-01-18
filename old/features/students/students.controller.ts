/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Query, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

// TODO
import { JwtAuthGuard } from '@core/../auth/jwt-auth.guard';
import { UserDeco } from '@core/deocrators/user.decorator';
import { User } from '@core/data';
import { Student } from '@core/data/student';

import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  /**
   *
   */
  constructor(private studentService: StudentsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  Get(
    @UserDeco() user: User,
    @Req() req: Request,
    @Query() query: any,
  ): Student[] {
    const test = [
      { a: 1 },
      { a: 'b' },
      { a: 'c' },
      { a: 'd' },
      { a: 'e' },
      { a: 'f' },
    ];

    console.log(test.filter(x => !query.level || x.a == query.level));

    return this.studentService.getAll(user.id, req.params);
  }

  @Get(':id')
  get(@UserDeco() user: User, @Param() params: { id: number }): boolean {
    console.log(user);
    console.log(params.id);

    return true;
  }
}
