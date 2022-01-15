import { LevelDto } from "..";
import { ExeriseTypes, SlopeTypes } from "../../../enum";

export class ExerciseDto {
  id: string;
  description: string;
  slopeType: SlopeTypes;
  type: ExeriseTypes;
  Level: LevelDto
  isOfficial: boolean;
}
