import { hundred } from "../lib/hundreds";

describe("should return the number text", () => {
  it("should return 'CIEN'", () => {
    expect(hundred(100)).toBe("CIEN");
  });

  it("should return 'CIENTO VEINTITRES'", () => {
    expect(hundred(123)).toBe("CIENTO VEINTITRES");
  });

  it("should return 'DOSCIENTOS TREINTA Y DOS'", () => {
    expect(hundred(232)).toBe("DOSCIENTOS TREINTA Y DOS");
  });

  it("should return 'CUATROCIENTOS'", () => {
    expect(hundred(400)).toBe("CUATROCIENTOS");
  });

  it("should return 'CIENTO OCHENTA Y DOS'", () => {
    expect(hundred(182)).toBe("CIENTO OCHENTA Y DOS");
  });

  it("should return 'CINCO'", () => {
    expect(hundred(5)).toBe("CINCO");
  });

  it("should return ''", () => {
    expect(hundred()).toBe("");
  });
});
