import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';
import { IsNotWhitespace } from '@shared/validators';
import { ExerciseDto } from '..';

export class AssetDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  @IsUrl()
  link: string;

  @ApiProperty({ type: () => AssetDto })
  exercise: ExerciseDto;
}
