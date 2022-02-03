import { ApiProperty } from '@nestjs/swagger';
import { MovementCategory } from '../../../enum';

export class MovementDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  movementCategory: MovementCategory;

  @ApiProperty()
  startLevelId: string;
}
