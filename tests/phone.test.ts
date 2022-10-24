import { isPhone } from "../src/utils";

test("VALIDATORS_IF_EMAIL_TESTS", () => {
  expect(isPhone("+79040260705")).toBe(true);
  expect(isPhone("+7(904)-026-07-05")).toBe(true);
  expect(isPhone("+7(904)-026-07-0")).toBe(false);
  expect(isPhone("7(904)-026-07-05")).toBe(false);
  expect(isPhone("+790402607056")).toBe(false);
  expect(isPhone("texttext89")).toBe(false);
});
