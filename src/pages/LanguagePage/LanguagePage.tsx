import React from "react";
import { FaReact } from "react-icons/fa";
import { COLORS } from "../../constants/colors";
import { LANGUAGE_ICONS } from "../../constants/icons";
import { MainLayout } from "../../layouts/MainLayout";
import {
  LanguagePageStyled,
  TbBrandNextjsStyled,
  TextContainerStyled,
} from "./LanguagePage.style";
import { BiCodeAlt } from "@react-icons/all-files/bi/BiCodeAlt";

import { LanguagePageProps } from "./LanguagePage.types";

export const LanguagePage: React.FC<LanguagePageProps> = ({ language }) => {
  return (
    <MainLayout title={language.title}>
      <LanguagePageStyled>
        <TbBrandNextjsStyled
          size={1200}
          color={COLORS.BorderColor}
          strokeWidth={0.4}
        />
        {
          LANGUAGE_ICONS({ size: 200, color: COLORS.TextColor })[
            language.id - 1
          ]?.component
        }
        <h1>{language.title}</h1>
        <TextContainerStyled>
          <h3>{language.title}</h3>
          {language.description}
        </TextContainerStyled>
        {/* <BiCodeAlt color={COLORS.BorderColor} size={600} strokeWidth={0.01} /> */}
      </LanguagePageStyled>
    </MainLayout>
  );
};
