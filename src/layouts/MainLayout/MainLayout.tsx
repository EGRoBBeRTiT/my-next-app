import React from "react";

import { MainLayoutProps } from "./MainLayout.types";

import "./MainLayout.style.tsx";
import { MainLayoutStyled } from "./MainLayout.style";
import { Header } from "../../components/Header";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutStyled>
      <Header />
      {children}
    </MainLayoutStyled>
  );
};
