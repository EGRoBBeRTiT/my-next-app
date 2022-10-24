import { phoneNumberFormatter } from "../src/utils";

const VALID_PHONE = "+7(904)026-0705";

test("VALIDATORS_IF_EMAIL_TESTS", () => {
  expect(phoneNumberFormatter("+79040260705")).toBe(VALID_PHONE);
  expect(phoneNumberFormatter("+7(904)-026-07-05")).toBe(VALID_PHONE);
  expect(phoneNumberFormatter("9040260705")).toBe(VALID_PHONE);
  expect(phoneNumberFormatter("79040260705")).toBe(VALID_PHONE);
  expect(phoneNumberFormatter("+7 904 026 07 05")).toBe(VALID_PHONE);
  expect(phoneNumberFormatter("8 904 026 07 05")).toBe(VALID_PHONE);
});
