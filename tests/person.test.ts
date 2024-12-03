import { describe, test, expect } from "bun:test";
import { randomName } from "../src";

describe("Person", () => {
  test("Memastikan randomName berfungsi", async () => {
    for (let i = 0; i < 1000; i++) {
      let result = await randomName("W");
      expect(result).toBeString();

      result = await randomName("M");
      expect(result).toBeString();
    }
  });
});