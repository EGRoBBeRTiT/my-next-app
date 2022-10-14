import React, { useCallback } from "react";

import { HeaderProps } from "./Header.types";

import "./Header.style.tsx";
import { ContentStyled, HeaderStyled } from "./Header.style";
import { Button } from "../Button";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { COLORS } from "../../constants/colors";
import { useRouter } from "next/router";

export const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();

  const handleButtonClick = useCallback(() => {
    void router.push("/auth");
  }, []);

  const handleLogoClick = useCallback(() => {
    void router.push("/");
  }, []);

  return (
    <HeaderStyled>
      <ContentStyled>
        <SiNextDotJs
          size={50}
          color={COLORS.BorderColor}
          onClick={handleLogoClick}
        />
        <Button onClick={handleButtonClick}>Логин</Button>
      </ContentStyled>
    </HeaderStyled>
  );
};
