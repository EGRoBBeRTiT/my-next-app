import React from "react";
import { InputStyled } from "./Input.style";

import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = (props) => {
  return <InputStyled {...props} />;
};
