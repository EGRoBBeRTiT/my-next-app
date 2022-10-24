import React, { useCallback } from "react";
import { Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants/colors";
import { RootState } from "../../store";
import { pushFields } from "../../store/common";
import { phoneNumberFormatter } from "../../utils";
import { InputField } from "../Fields/InputField";
import {
  ButtonStyled,
  ContentStyled,
  FooterContainerStyled,
  FormStyled,
  TbBrandNextjsStyled,
} from "./FooterContainer.style";

import {
  FooterContainerProps,
  FooterFormValues,
} from "./FooterContainer.types";
import { validateFooterForm } from "./FooterContainer.utils";

export const FooterContainer: React.FC<FooterContainerProps> = () => {
  const dispatch = useDispatch();
  const store = useSelector((store: RootState) => store);

  const handleFormSubmit = useCallback((values: FooterFormValues) => {
    dispatch(pushFields(values));
    alert(JSON.stringify(store.common, null, 2));
  }, []);

  return (
    <FooterContainerStyled>
      <ContentStyled>
        <h1>Узнать больше...</h1>
        <Form<FooterFormValues>
          validate={validateFooterForm}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit }) => (
            <FormStyled>
              <InputField
                name="phone"
                placeholder="phone"
                type="tel"
                parse={phoneNumberFormatter}
              />
              <ButtonStyled
                type="submit"
                onClick={handleSubmit as VoidFunction}
              >
                Узнать
              </ButtonStyled>
            </FormStyled>
          )}
        </Form>
      </ContentStyled>
      <TbBrandNextjsStyled
        size={1200}
        color={COLORS.BorderColor}
        strokeWidth={0.4}
      />
    </FooterContainerStyled>
  );
};
