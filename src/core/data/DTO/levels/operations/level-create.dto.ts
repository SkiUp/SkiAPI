import { ApiProperty } from '@nestjs/swagger';

export class LevelCreateDto {
  @ApiProperty({
    required: true,
  })
  name: string;
  @ApiProperty({
    required: false,
  })
  description?: string;
  @ApiProperty({
    required: false,
  })
  priorLevelId?: string;
}
