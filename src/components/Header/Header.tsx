import React, { useCallback } from "react";

import { HeaderProps } from "./Header.types";

import "./Header.style.tsx";
import { ContentStyled, HeaderStyled, SpanStyled } from "./Header.style";
import { Button } from "../Button";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { COLORS } from "../../constants/colors";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { clearStore } from "../../store/common";

export const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { email, password } = useSelector((store: RootState) => store.common);

  const handleButtonClick = useCallback(() => {
    void router.push("/auth");
  }, []);

  const handleLogoClick = useCallback(() => {
    void router.push("/");
  }, []);

  const handleExitClick = useCallback(() => {
    dispatch(clearStore());
  }, []);

  return (
    <HeaderStyled>
      <ContentStyled>
        <SiNextDotJs
          data-testid="logo"
          size={50}
          color={COLORS.BorderColor}
          onClick={handleLogoClick}
        />
        {email && password ? (
          <SpanStyled data-testid="logout" onClick={handleExitClick}>
            Выйти
          </SpanStyled>
        ) : (
          <Button data-testid="login" onClick={handleButtonClick}>
            Войти
          </Button>
        )}
      </ContentStyled>
    </HeaderStyled>
  );
};
