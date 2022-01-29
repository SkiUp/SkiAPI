import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

import { IsNotWhitespace } from '@app/shared/validators';
import { MouvementCategory } from '@core/data/enum';

export class MouvementUpsertDto {
  @ApiProperty()
  @IsUUID()
  id?: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNotWhitespace()
  description: string;

  @ApiProperty()
  @ApiProperty({ name: 'MouvementCategory', enum: MouvementCategory })
  mouvementCategory: MouvementCategory;

  @ApiProperty()
  @IsUUID()
  startLevelId: string;
}
