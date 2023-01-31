export const filter = <T>(arr: T[], condition: (i: T) => boolean) =>
  arr.reduce((acc, curr) => (condition(curr) ? [...acc, curr] : acc), [] as T[]);

export default filter;
