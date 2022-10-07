import { million } from "./lib/millions";

const transformNumberToText = (number) => {
  return million(number);
};

export default transformNumberToText;
