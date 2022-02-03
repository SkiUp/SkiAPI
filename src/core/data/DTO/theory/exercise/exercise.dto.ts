import { ApiProperty } from '@nestjs/swagger';
import { Asset, Level, Movement } from '@core/data';
import { ExerciseTypes, SlopeTypes } from '@core/data/enum';

export class ExerciseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  slopeType: SlopeTypes;

  @ApiProperty()
  type: ExerciseTypes;

  @ApiProperty()
  level: Level;

  @ApiProperty()
  movement: Movement;

  @ApiProperty()
  isOfficial: boolean;

  @ApiProperty()
  asset: Asset;
}
