import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

import { IsNotWhitespace } from '@shared/validators';
import { Exercise } from '@core/data/models/levels';

export class LevelUpsertDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  @MinLength(4)
  @MaxLength(254)
  name: string;

  @ApiProperty()
  @IsNotWhitespace()
  description?: string;

  @ApiProperty()
  @IsUUID()
  priorLevelId?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  exercises?: Exercise[];
}
