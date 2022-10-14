import React from "react";
import { CardStyled, TitleStyled } from "./Card.style";

import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({
  title,
  description,
  iconComponent,
  onClick,
}) => {
  return (
    <CardStyled onClick={onClick}>
      <TitleStyled>
        <h2>{title}</h2>
        {iconComponent}
      </TitleStyled>
      <p>{description}</p>
    </CardStyled>
  );
};
