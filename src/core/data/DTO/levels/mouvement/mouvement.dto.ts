import { ApiProperty } from '@nestjs/swagger';
import { MouvementCategory } from '../../../enum';

export class MouvementDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  mouvementCategory: MouvementCategory;

  @ApiProperty()
  startLevelId: string;
}
