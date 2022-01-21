import { Asset, Level, Mouvement } from '@core/data';
import { ApiProperty } from '@nestjs/swagger';
import { ExeriseTypes, SlopeTypes } from '@core/data/enum';

export class ExerciseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  slopeType: SlopeTypes;

  @ApiProperty()
  type: ExeriseTypes;

  @ApiProperty()
  level: Level;

  @ApiProperty()
  mouvement: Mouvement;

  @ApiProperty()
  isOfficial: boolean;

  @ApiProperty()
  asset: Asset;
}
