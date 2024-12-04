import { describe, test, expect } from "bun:test";
import { randomName } from "../src";

describe("Person", () => {
  test("Memastikan randomName berfungsi", async () => {
    let result = await randomName("W");
    expect(result).toBeString();
    
    result = await randomName("M");
    expect(result).toBeString();
  });
});