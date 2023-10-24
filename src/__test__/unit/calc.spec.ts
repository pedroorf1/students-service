import { describe, expect, test } from "@jest/globals";
import { calc } from "../../calc";

describe("sum module", () => {
  test("adds 1,2,2,5 to equal 10", async () => {
    expect(await calc(1, 2, 2, 5)).toBe(10);
  });
});
