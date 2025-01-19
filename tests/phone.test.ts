import { describe, test, expect } from "bun:test";
import { randomPhoneNumber } from "src";

describe("Phone", () => {
  test("Memastikan randomPhoneNumber berfungsi", () => {
    const data = randomPhoneNumber();
    
    expect(data).toBeString();
  });
});