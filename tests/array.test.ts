import { describe, test, expect } from "bun:test";
import { arrayShuffle } from "../src";

describe("Array", () => {
  test("Memastikan arrayShuffle berfungsi", () => {
    const friends = ["Eko", "Budi", "Andi"];
    for (let i = 0; i < 1000; i++) {
      const result = arrayShuffle(friends);
      
      expect(friends.length).toBe(friends.length);
      expect(friends.includes(result[0]));
    }
  });
});