import { thousands } from "../lib/thousands";

describe("should return the number text", () => {
  it("should return 'MIL'", () => {
    expect(thousands(1000)).toBe("MIL");
  });

  it("should return 'MIL CIENTO VEINTIDOS'", () => {
    expect(thousands(1122)).toBe("MIL CIENTO VEINTIDOS");
  });

  it("should return 'MIL VEINTIDOS'", () => {
    expect(thousands(1022)).toBe("MIL VEINTIDOS");
  });

  it("should return 'CIENTO VEINTITRES MIL'", () => {
    expect(thousands(123000)).toBe("CIENTO VEINTITRES MIL");
  });

  it("should return 'CIENTO OCHENTA Y DOS MIL'", () => {
    expect(thousands(182000)).toBe("CIENTO OCHENTA Y DOS MIL");
  });

  it("should return 'CIENTO OCHENTA Y DOS MIL CIENTO VEINTIUNO'", () => {
    expect(thousands(182121)).toBe("CIENTO OCHENTA Y DOS MIL CIENTO VEINTIUNO");
  });

  it("should return 'CINCO'", () => {
    expect(thousands(5)).toBe("CINCO");
  });

  it("should return ''", () => {
    expect(thousands()).toBe("");
  });
});
