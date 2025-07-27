export function divideArray<T>(arr: T[], chunkSize: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }
  return res;
}
