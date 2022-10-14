import React from "react";
import { ButtonStyled } from "./Button.style";

import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
