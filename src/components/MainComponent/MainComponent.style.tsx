import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const MainComponentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: ${COLORS.BackgroundDark};

  h1 {
    color: ${COLORS.TextColor};
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 80px;

    text-align: center;
    letter-spacing: 0.2px;
  }
`;
