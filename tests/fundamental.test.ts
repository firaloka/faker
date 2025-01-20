import { describe, test, expect } from "bun:test";
import { randomInteger, randomBoolean } from "src";

describe("Fundamental", () => {
  test("Memastikan randomInteger berfungsi", () => {
    const min = 0;
    const max = 100;
    const result = randomInteger(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test("Memastikan randomBoolean berfungsi", () => {
    const result = randomBoolean();

    expect(result).toBeBoolean();
  });
});
