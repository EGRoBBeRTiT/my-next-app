import { stringWithOnlyDigid } from ".";

const PHONE_REGEX = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,9}$/;

export const isPhone = (phone: string) =>
  PHONE_REGEX.test(phone) && stringWithOnlyDigid(phone).length === 11;
