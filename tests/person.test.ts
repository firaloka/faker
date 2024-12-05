import { describe, test, expect } from "bun:test";
import { randomName, randomGender } from "../src";

describe("Person", () => {
  test("Memastikan randomName berfungsi", async () => {
    let result = await randomName("W");
    expect(result).toBeString();
    
    result = await randomName("M");
    expect(result).toBeString();
  });

  test("Memastikan randomGender berfungsi", async () => {
    let result = randomGender();
    expect(["Man", "Woman"].includes(result)).toBeTruthy();
    
    result = randomGender(true);
    expect(["Pria", "Wanita"].includes(result)).toBeTruthy();
  });
});