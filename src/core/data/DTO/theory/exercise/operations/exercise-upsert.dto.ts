import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator'
import { SlopeTypes, ExerciseTypes } from '@core/data'
import { IsNotWhitespace } from '@shared/validators'
import { AssetDto } from '../../../core/asset.dto'

export class ExerciseUpsertDto {
  @ApiProperty()
  @ApiPropertyOptional()
  id?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  description: string

  @ApiProperty({ name: 'SlopeTypes', enum: SlopeTypes })
  slopeType: SlopeTypes

  @ApiProperty({ name: 'ExeriseTypes', enum: ExerciseTypes })
  type: ExerciseTypes

  @ApiProperty()
  @IsUUID()
  levelId: string

  @ApiProperty()
  @IsUUID()
  movementId: string

  @ApiProperty()
  isOfficial: boolean

  @ApiProperty({ type: () => AssetDto })
  @IsOptional()
  asset?: AssetDto
}
