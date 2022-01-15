import { ApiProperty } from '@nestjs/swagger';
export class LevelUpdateDto {
  @ApiProperty()
  name: string;
}
