import { readFileSync } from "fs";

export default async (path: string): Promise<string> => {
  return await readFileSync(path).toString();
}