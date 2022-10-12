import React from "react";
import { MainComponentStyled } from "./MainComponent.style";

import { MainComponentProps } from "./MainComponent.types";

export const MainComponent: React.FC<MainComponentProps> = () => {
  return (
    <MainComponentStyled>
      <h1>I'd started learning Next!</h1>
    </MainComponentStyled>
  );
};
