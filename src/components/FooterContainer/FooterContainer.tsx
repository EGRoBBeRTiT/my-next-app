import React, { useCallback } from "react";
import { Form } from "react-final-form";
import { COLORS } from "../../constants/colors";
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
  const handleFormSubmit = useCallback((values: FooterFormValues) => {
    alert(JSON.stringify(values, null, 2));
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
