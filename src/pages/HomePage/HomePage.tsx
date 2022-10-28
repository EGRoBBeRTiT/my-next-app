import React from "react";

import "./HomePage.style.tsx";
import { WrapperStyled } from "./HomePage.style";
import { MainLayout } from "../../layouts/MainLayout";
import { MainComponent } from "../../components/MainComponent";
import { SecondComponent } from "../../components/SecondComponent";
import { Third } from "../../components/Third";
import { HomePageProps } from "./HomePage.type";
import { FooterContainer } from "../../components/FooterContainer";

export const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <MainLayout title="My Next App">
      <>
        <MainComponent data-testid="home-page" />
        <Third />
        <SecondComponent data={data} />
        <FooterContainer />
      </>
    </MainLayout>
  );
};
