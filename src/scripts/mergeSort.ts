const sliceinTwo = (arr: number[]) =>
  arr.length === 1 ? [arr] : [arr.slice(0, Math.floor(arr.length / 2)), arr.slice(Math.floor(arr.length / 2))];

const mergeTwo = (left: number[], right: number[]) => {
  const current: number[] = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      current.push(right.shift() as number);
    } else {
      current.push(left.shift() as number);
    }
  }

  return [...current, ...left, ...right];
};

const mergeAll = (array: number[][]) => {
  const middle = Math.ceil(array.length / 2);
  const current: number[][] = [];

  for (let i = 0; i < middle; i++) {
    current.push(mergeTwo(array[2 * i] || [], array[2 * i + 1] || []));
  }

  return current;
};

const mergeSort = (initial: number[]) => {
  let split: number[][] = [];
  let merged: number[][] = [];

  while (split.length !== initial.length) {
    split = split.length === 0 ? [initial].flatMap((a) => sliceinTwo(a)) : split.flatMap((a) => sliceinTwo(a));
  }

  while (merged.length !== 1) {
    merged = merged.length === 0 ? mergeAll(split) : mergeAll(merged);
  }

  return merged;
};

export default mergeSort;
