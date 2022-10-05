import { million } from "./lib/format/million";

const transformNumberToText = (number) => {
  return million(number);
};

export default transformNumberToText;
