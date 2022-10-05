import { units } from "../lib/units";

describe("should return the number text", () => {
  it("should return 'CINCO'", () => {
    expect(units(5)).toBe("CINCO");
  });

  it("should return ''", () => {
    expect(units()).toBe("");
  });
});
