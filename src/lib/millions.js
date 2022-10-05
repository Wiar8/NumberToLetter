import { thousands } from "./thousands";
import { hundred } from "./hundreds";

function million(num) {
  const maximumThousands = 999999;

  if (num <= maximumThousands || num == null) {
    return thousands(num);
  }

  const divider = 1000000;
  const million = Math.floor(num / divider);

  const remainder = num - million * divider;

  if (million != 1) {
    if (remainder == 0) {
      return hundred(million) + " MILLONES";
    } else {
      return hundred(million) + " MILLONES" + " " + thousands(remainder);
    }
  } else {
    if (remainder != 0) {
      return "UN MILLON" + " " + thousands(remainder);
    }
    return "UN MILLON";
  }
}

export { million };
