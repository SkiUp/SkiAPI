import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

import { IsNotWhitespace, IsValidUuid } from '@shared/validators';
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
  @IsValidUuid()
  priorLevelId?: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  exercises?: Exercise[];
}
