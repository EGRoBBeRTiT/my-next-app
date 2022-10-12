import React from "react";

import "./HomePage.style.tsx";
import { WrapperStyled } from "./HomePage.style";
import { MainLayout } from "../../layouts/MainLayout";
import { MainComponent } from "../../components/MainComponent";
import { SecondComponent } from "../../components/SecondComponent";

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <>
        <MainComponent />
        <SecondComponent />
      </>
    </MainLayout>
  );
};
