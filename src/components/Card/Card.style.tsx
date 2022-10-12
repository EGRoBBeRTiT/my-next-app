import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const CardStyled = styled.div`
  width: 100%;
  max-width: 280px;
  height: 100%;
  max-height: 480px;
  border-radius: 28px;
  padding: 24px;
  background: linear-gradient(
      0deg,
      rgba(208, 188, 255, 0.11),
      rgba(208, 188, 255, 0.11)
    ),
    #1c1b1f;

  color: ${COLORS.TextColor2};

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
