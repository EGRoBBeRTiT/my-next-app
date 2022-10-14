import React, { useCallback } from "react";
import { Card } from "../Card";
import {
  ContentStyled,
  DiJavascript1Styled,
  FaReactStyled,
  SecondComponentStyled,
  SiNextDotJsStyled,
  SiTypescriptStyled,
} from "./SecondComponent.style";

import { SecondComponentProps } from "./SecondComponent.types";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { useRouter } from "next/router";
import { LANGUAGE_ICONS } from "../../constants/icons";
import { COLORS } from "../../constants/colors";

export const SecondComponent: React.FC<SecondComponentProps> = ({ data }) => {
  const router = useRouter();

  const handleCardClick = useCallback((id: number) => {
    router.push(`language/${id}`);
  }, []);

  return (
    <SecondComponentStyled>
      <ContentStyled>
        {data?.map((value, index) => (
          <Card
            key={value.id}
            title={value.title}
            iconComponent={LANGUAGE_ICONS({})[index].component}
            description={value.subTitle}
            onClick={() => {
              handleCardClick(value.id);
            }}
          />
        ))}
      </ContentStyled>
      <FaReactStyled size={200} color={COLORS.BorderColor} />
      <SiTypescriptStyled size={200} color={COLORS.BorderColor} />
      <SiNextDotJsStyled size={200} color={COLORS.BorderColor} />
      <DiJavascript1Styled size={200} color={COLORS.BorderColor} />
    </SecondComponentStyled>
  );
};
