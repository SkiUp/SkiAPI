export function queryParamFixer<T>(object: unknown): T {
  if (!object) {
    return null;
  }
  let output: any = {};
  for (const [key, value] of Object.entries(object)) {
    output[key] = JSON.parse(value);
  }
  return output as T;
}
