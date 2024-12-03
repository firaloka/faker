export default async (path: string): Promise<string> => {
  return await Bun.file(path).text();
}