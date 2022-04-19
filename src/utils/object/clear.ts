/**
 * Sets values of specifed keys to undefined and returns new object without them
 * @param object object which includes specifed keys
 * @param keys keys to clear and omit
 */
export function clear(object: any, keys: string[]) {
  keys.forEach(key => (object[key] = undefined));
}
