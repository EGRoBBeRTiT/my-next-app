import { stringWithOnlyDigid } from ".";

export const phoneNumberFormatter = (currentValue: string) => {
  let inputNumbersValue = stringWithOnlyDigid(currentValue);
  let formattedInputValue = "";

  if (!inputNumbersValue) {
    return "";
  }

  if (currentValue[0] === "9") {
    inputNumbersValue = "7" + inputNumbersValue;
  }

  if (currentValue[0] === "8") {
    inputNumbersValue = "7" + inputNumbersValue.slice(1);
  }

  const codeLength = 1;

  formattedInputValue = `+${inputNumbersValue[0]}`;

  if (inputNumbersValue.length > codeLength) {
    formattedInputValue +=
      "(" + inputNumbersValue.slice(codeLength, codeLength + 3);
  }
  if (inputNumbersValue.length >= codeLength + 4) {
    formattedInputValue +=
      ")" + inputNumbersValue.slice(codeLength + 3, codeLength + 6);
  }
  if (inputNumbersValue.length >= codeLength + 7) {
    if (codeLength === 1) {
      formattedInputValue += "-" + inputNumbersValue.slice(codeLength + 6, 11);
    } else {
      formattedInputValue += "-" + inputNumbersValue.slice(codeLength + 6, 14);
    }
  }

  return formattedInputValue;
};
