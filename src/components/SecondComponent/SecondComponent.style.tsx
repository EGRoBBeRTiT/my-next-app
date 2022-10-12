import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { MAX_WIDTH } from "../../constants/constants";

export const SecondComponentStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding-top: 140px;
`;

export const ContentStyled = styled.div`
  display: flex;
  gap: 36px;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 480px;
  border-radius: 16px;
  background: ${COLORS.Black};
  padding: 40px;
`;
