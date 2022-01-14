import { LevelDto } from "..";
import { ExericeTypes, SlopeTypes } from "../../../enum";

export class ExerciseDto {
  id: string;
  description: string;
  slopeType: SlopeTypes;
  type: ExericeTypes;
  Level: LevelDto
  isOfficial: boolean;
}
