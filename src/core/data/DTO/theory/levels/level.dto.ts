import { ApiProperty } from '@nestjs/swagger'

import { ExerciseDto } from '@core/data/DTO'

export class LevelDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  description?: string

  @ApiProperty()
  priorLevelId?: string

  @ApiProperty()
  exercises: ExerciseDto[] = []
}
