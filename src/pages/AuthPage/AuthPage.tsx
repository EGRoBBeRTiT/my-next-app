import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { COLORS } from "../../constants/colors";
import { MainLayout } from "../../layouts/MainLayout";
import { AuthContainer } from "./AuthContainer";
import { AuthPageStyled } from "./AuthPage.style";

import { AuthPageProps } from "./AuthPage.types";

export const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <MainLayout title="Auth">
      <>
        <AuthPageStyled t>
          <TbBrandNextjs
            size={1200}
            color={COLORS.BorderColor}
            strokeWidth={0.4}
          />
          <AuthContainer />
        </AuthPageStyled>
      </>
    </MainLayout>
  );
};
