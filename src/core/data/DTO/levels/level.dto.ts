import { ApiProperty } from '@nestjs/swagger';

import { ExerciseDto } from './exercise/exercise.dto';

export class LevelDto {
  
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  priorLevelId?: string;

  @ApiProperty()
  exercises: ExerciseDto[] = [];
}
