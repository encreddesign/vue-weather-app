import { QueryParams } from '../types/api';

export function queryString(params: QueryParams): string {
  const keys: Array<string> = Object.keys(params);
  const queryArray: Array<string> = [];

  if (keys.length) {
    for (let keyI = 0; keyI < keys.length; keyI += 1) {
      const key = keys[keyI];
      const value = params[key];

      queryArray.push(`${key}=${value}`);
    }
  }

  return queryArray.join('&');
}