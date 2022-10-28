/**
 * @jest-environment jsdom
 */

import React, { ReactElement } from "react";
import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { AuthPage } from "../src/pages/AuthPage/AuthPage";

import { store, useAppSelector } from "../src/store";

import { clearStore } from "../src/store/common/common.reducer";

import { getCurrentValue } from "../src/store/common";
import { useDispatch } from "react-redux";

describe("TEST INTEGRATION", () => {
  const { window } = global;

  test("TEST SUBMIT VALID FORM", () => {
    render(
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );

    const login = screen.getByTestId("login");

    expect(login).toBeInTheDocument();

    const inputEmail = screen.getByPlaceholderText("e-mail");
    const inputPassword = screen.getByPlaceholderText("password");

    fireEvent.change(inputEmail, { target: { value: "test@test.ru" } });
    expect(inputEmail.value).toBe("test@test.ru");

    fireEvent.change(inputPassword, { target: { value: "123456" } });
    expect(inputPassword.value).toBe("123456");

    const submitButton = screen.getByTestId("submit");

    fireEvent.click(submitButton);

    const logout = screen.getByTestId("logout");
    expect(logout).toBeInTheDocument();
  });

  test("TEST SUBMIT INVALID FORM", () => {
    render(
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );

    const logout = screen.getByTestId("logout");
    fireEvent.click(logout);

    const login = screen.getByTestId("login");
    expect(login).toBeInTheDocument;

    const inputEmail = screen.getByPlaceholderText("e-mail");
    const inputPassword = screen.getByPlaceholderText("password");

    fireEvent.change(inputEmail, { target: { value: "test@test" } });
    expect(inputEmail.value).toBe("test@test");

    fireEvent.change(inputPassword, { target: { value: "123456" } });
    expect(inputPassword.value).toBe("123456");

    const submitButton = screen.getByTestId("submit");
    fireEvent.click(submitButton);

    expect(logout).not.toBeInTheDocument();
  });
});
