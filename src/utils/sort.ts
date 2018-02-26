export const by = key => (a, b) =>
  a[key] - b[key] < 0 ? -1 : 1;

export const descBy = key => (a, b) =>
  a[key] - b[key] < 0 ? 1 : -1;

export const sortBy = <T>(key, arr: T[], fn = x => x): T[] =>
  arr.slice().sort(by(key));
