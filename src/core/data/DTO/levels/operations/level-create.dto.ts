export interface LevelCreateDto {
  id: string;
  name: string;
  description?: string;
  priorLevelId?: string;
}
