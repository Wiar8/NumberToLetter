import { tens } from "../lib/tens";

describe("should return the number text", () => {
  it("should return 'DIECIOCHO'", () => {
    expect(tens(18)).toBe("DIECIOCHO");
  });

  it("should return 'VEINTITRES'", () => {
    expect(tens(23)).toBe("VEINTITRES");
  });

  it("should return 'OCHENTA Y DOS'", () => {
    expect(tens(82)).toBe("OCHENTA Y DOS");
  });

  it("should return 'CINCO'", () => {
    expect(tens(5)).toBe("CINCO");
  });

  it("should return ''", () => {
    expect(tens()).toBe("");
  });
});
