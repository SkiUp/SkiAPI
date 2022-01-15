import { ApiProperty } from "@nestjs/swagger";

export class LevelsQueryDto {
    @ApiProperty()
    searches?: string[];

    @ApiProperty()
    priorLevelIds?: string[];   
}