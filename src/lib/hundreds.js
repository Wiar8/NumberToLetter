import { tens } from "./tens";

const hundred = (num) => {
  const hundred = Math.floor(num / 100);
  const tensOfHundreds = num - hundred * 100;

  if (tensOfHundreds != 0) {
    switch (hundred) {
      case 1:
        if (tensOfHundreds > 0) return "CIENTO " + tens(tensOfHundreds);
        return "CIEN ";
      case 2:
        return "DOSCIENTOS " + tens(tensOfHundreds);
      case 3:
        return "TRESCIENTOS " + tens(tensOfHundreds);
      case 4:
        return "CUATROCIENTOS " + tens(tensOfHundreds);
      case 5:
        return "QUINIENTOS " + tens(tensOfHundreds);
      case 6:
        return "SEISCIENTOS " + tens(tensOfHundreds);
      case 7:
        return "SETECIENTOS " + tens(tensOfHundreds);
      case 8:
        return "OCHOCIENTOS " + tens(tensOfHundreds);
      case 9:
        return "NOVECIENTOS " + tens(tensOfHundreds);
    }
  } else {
    switch (hundred) {
      case 1:
        if (tensOfHundreds > 0) return "CIENTO " + tens(tensOfHundreds);
        return "CIEN";
      case 2:
        return "DOSCIENTOS" + tens(tensOfHundreds);
      case 3:
        return "TRESCIENTOS" + tens(tensOfHundreds);
      case 4:
        return "CUATROCIENTOS" + tens(tensOfHundreds);
      case 5:
        return "QUINIENTOS" + tens(tensOfHundreds);
      case 6:
        return "SEISCIENTOS" + tens(tensOfHundreds);
      case 7:
        return "SETECIENTOS" + tens(tensOfHundreds);
      case 8:
        return "OCHOCIENTOS" + tens(tensOfHundreds);
      case 9:
        return "NOVECIENTOS" + tens(tensOfHundreds);
    }
  }

  return tens(tensOfHundreds);
};

export { hundred };
