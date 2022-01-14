export interface CreateLevelDto {
  id: string;
  name: string;
  description?: string;
  priorLevelId?: string;
}
