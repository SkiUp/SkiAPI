import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

import { IsNotWhitespace } from '@app/shared/validators';
import { MovementCategory } from '@core/data/enum';

export class MovementUpsertDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  description: string;

  @ApiProperty()
  @ApiProperty({ name: 'MovementCategory', enum: MovementCategory })
  movementCategory: MovementCategory;

  @ApiProperty()
  @IsUUID()
  startLevelId: string;
}
