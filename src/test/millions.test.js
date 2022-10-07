import { million } from "../lib/millions";

describe("should return the number text", () => {
  it("should return 'UN MILLON TRESCIENTOS MIL'", () => {
    expect(million(1300000)).toBe("UN MILLON TRESCIENTOS MIL");
  });

  it("should return 'MIL CIENTO VEINTIDOS'", () => {
    expect(million(1122)).toBe("MIL CIENTO VEINTIDOS");
  });

  it("should return 'CIENTO VEINTITRES MILLONES'", () => {
    expect(million(123000000)).toBe("CIENTO VEINTITRES MILLONES");
  });

  it("should return 'DIECIOCHO MILLONES DOSCIENTOS TREINTA Y DOS MIL'", () => {
    expect(million(18232000)).toBe(
      "DIECIOCHO MILLONES DOSCIENTOS TREINTA Y DOS MIL"
    );
  });

  it("should return 'CUATROCIENTOS TREINTA Y DOS MILLONES CIENTO OCHENTA Y DOS MIL CIENTO VEINTIUNO'", () => {
    expect(million(432182121)).toBe(
      "CUATROCIENTOS TREINTA Y DOS MILLONES CIENTO OCHENTA Y DOS MIL CIENTO VEINTIUNO"
    );
  });

  it("should return 'CINCO'", () => {
    expect(million(5)).toBe("CINCO");
  });

  it("should return ''", () => {
    expect(million()).toBe("");
  });
});
