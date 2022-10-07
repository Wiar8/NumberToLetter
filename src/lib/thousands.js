import { hundred } from "./hundreds";

function thousands(num) {
  const maximumHundreds = 999;

  if (num <= maximumHundreds || num == null) {
    return hundred(num);
  }

  const divider = 1000;
  const hundreds = Math.floor(num / divider);
  const remainder = num - hundreds * divider;

  if (hundreds != 1) {
    if (remainder == 0) {
      return hundred(hundreds) + " MIL";
    } else {
      return hundred(hundreds) + " MIL" + " " + hundred(remainder);
    }
  } else {
    if (remainder != 0) {
      return "MIL" + " " + hundred(remainder);
    }
    return "MIL";
  }
}

export { thousands };
