/**
 * Returns integer random value between min and max values
 * @param min left border of the range
 * @param max right border of the range
 * @param isMaxInclusive max value is inclusive in the range or not
 */
export function getRandomInt(min: number, max: number, isMaxInclusive = true) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + +isMaxInclusive)) + min;
}
