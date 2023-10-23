export async function calc(...args: number[]): Promise<number> {
  const result = await args.reduce((initial, value) => initial + value);
  return result;
}
