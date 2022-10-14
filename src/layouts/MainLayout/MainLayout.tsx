import React from "react";

import { MainLayoutProps } from "./MainLayout.types";

import "./MainLayout.style.tsx";
import { MainLayoutStyled } from "./MainLayout.style";
import { Header } from "../../components/Header";
import Head from "next/head";

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <MainLayoutStyled>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </MainLayoutStyled>
  );
};
