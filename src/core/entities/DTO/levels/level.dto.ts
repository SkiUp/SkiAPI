import { ExerciseDto } from "./exercise/exercise.dto";

export class LevelDto {
    id: string;
    name: string;
    description?: string;
    priorLevelId?: string;
    exercices: ExerciseDto[] = [];
  }