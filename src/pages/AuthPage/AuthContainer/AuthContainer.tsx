import React, { useCallback, useEffect } from "react";
import { AuthContainerStyled, ButtonStyled } from "./AuthContainer.style";

import { AuthContainerProps, AuthFormValues } from "./AuthContainer.types";

import { TbBrandNextjs } from "react-icons/tb";
import { COLORS } from "../../../constants/colors";
import { Form } from "react-final-form";
import { InputField } from "../../../components/Fields/InputField";
import { Button } from "../../../components/Button";
import { validateAuthForm } from "./AuthContainer.utils";
import { useDispatch } from "react-redux";
import { pushFields } from "../../../store/common";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const AuthContainer: React.FC<AuthContainerProps> = () => {
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store);

  const handleFormSubmit = useCallback((values: AuthFormValues) => {
    dispatch(pushFields(values));
  }, []);

  return (
    <AuthContainerStyled>
      <TbBrandNextjs size={80} color={COLORS.BorderColor} strokeWidth={1} />
      <Form<AuthFormValues>
        onSubmit={handleFormSubmit}
        validate={validateAuthForm}
      >
        {({ handleSubmit }) => (
          <>
            <InputField name="email" type="email" placeholder="e-mail" />
            <InputField
              name="password"
              type="password"
              placeholder="password"
            />
            <ButtonStyled
              data-testid="submit"
              type="submit"
              onClick={handleSubmit as VoidFunction}
            >
              Войти
            </ButtonStyled>
          </>
        )}
      </Form>
    </AuthContainerStyled>
  );
};
