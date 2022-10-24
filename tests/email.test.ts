import { isEmail } from "../src/utils";

test("VALIDATORS_IF_EMAIL_TESTS", () => {
  expect(isEmail("example")).toBe(false);
  expect(isEmail("example@test")).toBe(false);
  expect(isEmail("example@test.e")).toBe(false);
  expect(isEmail("example@test.com")).toBe(true);
  expect(isEmail("example@test.ru")).toBe(true);
});
