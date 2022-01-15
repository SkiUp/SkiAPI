import { IsNotWhitespace, IsValidUuid } from '@core/validations/string-validations';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
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
}
