import smallestPositive from './scripts/smallestPositive';

export function runScripts() {
  console.log(smallestPositive([2, 3, 7, 6, 8, -1, -10, 15]));
  console.log(smallestPositive([2, 3, -7, 6, 8, 1, -10, 15]));
  console.log(smallestPositive([1, 1, 0, -1, -2]));
  console.log(smallestPositive([-12, 0, 1, 2, 3, 4, 5, 6]));
}
