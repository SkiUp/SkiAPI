import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { SlopeTypes, ExeriseTypes } from '@core/data';
import { IsNotWhitespace } from '@shared/validators';
import { AssetDto } from '../../../core/asset.dto';

export class ExerciseUpsertDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  description: string;

  @ApiProperty({ name: 'SlopeTypes', enum: SlopeTypes })
  slopeType: SlopeTypes;

  @ApiProperty({ name: 'ExeriseTypes', enum: ExeriseTypes })
  type: ExeriseTypes;

  @ApiProperty()
  @IsUUID()
  levelId: string;

  @ApiProperty()
  @IsUUID()
  mouvementId: string;

  @ApiProperty()
  isOfficial: boolean;

  @ApiProperty({ type: () => AssetDto })
  @IsOptional()
  asset: AssetDto;
}
