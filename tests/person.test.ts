import { describe, test, expect } from "bun:test";
import { randomName, randomGender } from "src";

describe("Person", () => {
  test("Memastikan randomName berfungsi", () => {
    let result = randomName("W");
    expect(result).toBeString();
    
    result = randomName("M");
    expect(result).toBeString();
  });

  test("Memastikan randomGender berfungsi", () => {
    let result = randomGender();
    expect(["Man", "Woman"].includes(result)).toBeTruthy();
    
    result = randomGender(true);
    expect(["Pria", "Wanita"].includes(result)).toBeTruthy();
  });
});