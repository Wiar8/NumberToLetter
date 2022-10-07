import { units } from "./units";

const tens = (num) => {
  const ten = Math.floor(num / 10);
  const unit = num - ten * 10;

  switch (ten) {
    case 1:
      switch (unit) {
        case 0:
          return "DIEZ";
        case 1:
          return "ONCE";
        case 2:
          return "DOCE";
        case 3:
          return "TRECE";
        case 4:
          return "CATORCE";
        case 5:
          return "QUINCE";
        default:
          return "DIECI" + units(unit);
      }
    case 2:
      switch (unit) {
        case 0:
          return "VEINTE";
        default:
          return "VEINTI" + units(unit);
      }
    case 3:
      return tensAnd("TREINTA", unit);
    case 4:
      return tensAnd("CUARENTA", unit);
    case 5:
      return tensAnd("CINCUENTA", unit);
    case 6:
      return tensAnd("SESENTA", unit);
    case 7:
      return tensAnd("SETENTA", unit);
    case 8:
      return tensAnd("OCHENTA", unit);
    case 9:
      return tensAnd("NOVENTA", unit);
    case 0:
      return units(unit);
    default:
      return "";
  }
};

const tensAnd = (strSin, numUnit) => {
  if (numUnit > 0) return strSin + " Y " + units(numUnit);

  return strSin;
};

export { tens };
