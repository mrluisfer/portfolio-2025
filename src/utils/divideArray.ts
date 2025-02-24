export const divideArray = <T>(array: T[], size: number): T[][] => {
  const dividedArray: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    dividedArray.push(array.slice(i, i + size));
  }
  return dividedArray;
};
