import { describe, test, expect } from "bun:test";
import { arrayShuffle, randomElementOfArray } from "src";

describe("Array", () => {
  test("Memastikan arrayShuffle berfungsi", () => {
    const friends = ["Eko", "Budi", "Andi"];
    
    const result = arrayShuffle(friends);
    expect(friends.length).toBe(friends.length);
    expect(friends.includes(result[0]));
  });

  test("Memastikan randomElementOfArray berfungsi", () => {
    const friends = ["Eko", "Budi", "Andi"];

    const result = randomElementOfArray(friends);
    expect(friends.includes(result)).toBeTruthy();
  });
});