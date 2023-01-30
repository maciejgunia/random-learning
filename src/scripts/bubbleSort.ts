const bubbleSort = (initial: number[]) => {
  let changes = 0;

  do {
    changes = 0;
    for (let i = 0; i < initial.length; i++) {
      if (initial[i + 1] !== undefined && initial[i] > initial[i + 1]) {
        const smaller = initial[i + 1];

        initial[i + 1] = initial[i];
        initial[i] = smaller;
        changes++;
      }
    }
  } while (changes !== 0);

  return initial;
};

export default bubbleSort;
