const smallestPositive = (arr: number[]) => {
  const map: Map<number, boolean> = arr.reduce((acc, curr) => (curr > 0 ? acc.set(curr, true) : acc), new Map());

  for (let i = 1; i < map.size; i++) {
    if (map.get(i) === undefined) {
      return i;
    }
  }

  return map.size + 1;
};

export default smallestPositive;
