import { Level } from '@core/data';

export function sortLevels(input: Level[], parentId = '', result: Level[] = []) {
  input.forEach((level) => {
    if (level.priorLevelId === parentId) {
      result.push(level);
      sortLevels(input, level.id, result);
    }
  });
  return result;
}
