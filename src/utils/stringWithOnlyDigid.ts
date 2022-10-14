const NOT_DIGIT_REGEXP = /\D/g;

export const stringWithOnlyDigid = (value: string): string =>
  value.replace(NOT_DIGIT_REGEXP, "");
