import commonReducer, {
  clearStore,
  pushFields,
} from "../src/store/common/common.reducer";

describe("TEST ACTIONS", () => {
  test("TEST PUSH FIELDS", () => {
    expect(
      commonReducer(
        {},
        pushFields({ password: "12345", email: "email@email.ru" })
      )
    ).toEqual({ password: "12345", email: "email@email.ru" });
  });

  test("TEST CLEAR FIELDS", () => {
    expect(
      commonReducer(
        { password: "12345", email: "email@email.ru" },
        clearStore()
      )
    ).toEqual({ password: "", email: "", phone: "" });
  });
});
