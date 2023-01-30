import bubbleSort from './scripts/bubbleSort';
import mergeSort from './scripts/mergeSort';

export function runScripts() {
  console.log(
    `Sorting [3, 4, 2, 1, 7, 5, 8, 9, 0, 6, 10] using merge sort results in ${mergeSort([
      3, 4, 2, 1, 7, 5, 8, 9, 0, 6, 10,
    ])}`,
  );
  console.log(`Sorting [500, 243, 321, 111, 0,2] using merge sort results in ${mergeSort([500, 243, 321, 111, 0, 2])}`);

  console.log(
    `Sorting [3, 4, 2, 1, 7, 5, 8, 9, 0, 6, 10] using bubble sort results in ${bubbleSort([
      3, 4, 2, 1, 7, 5, 8, 9, 0, 6, 10,
    ])}`,
  );
  console.log(
    `Sorting [500, 243, 321, 111, 0,2] using bubble sort results in ${bubbleSort([500, 243, 321, 111, 0, 2])}`,
  );
}
