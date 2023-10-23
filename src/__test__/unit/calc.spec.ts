import { describe, expect, test } from "@jest/globals";
import { calc } from "../../calc";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", async () => {
    expect(await calc(1, 2)).toBe(3);
  });
});
