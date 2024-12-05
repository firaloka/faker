import { readFileSync } from "fs";
import { join } from "path";

export default async (path: string): Promise<string> => {
  path = join(__dirname, "../../data", path);
  return await readFileSync(path).toString();
}