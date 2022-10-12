import React from "react";

import { HeaderProps } from "./Header.types";

import "./Header.style.tsx";
import { ContentStyled, HeaderStyled } from "./Header.style";
import { Button } from "../Button";

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderStyled>
      <ContentStyled>
        <Button />
      </ContentStyled>
    </HeaderStyled>
  );
};
