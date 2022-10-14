import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { MAX_WIDTH } from "../../constants/constants";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";

export const SecondComponentStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding-top: 140px;
  background: ${COLORS.BackgroundDark};
  overflow: hidden;
`;

export const ContentStyled = styled.div`
  display: flex;
  gap: 36px;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 540px;
  border-radius: 16px;
  background: transparent;
  backdrop-filter: blur(8px);
  border: 1px solid ${COLORS.BorderColor};
  padding: 70px 40px;
  z-index: 2;
`;

export const FaReactStyled = styled(FaReact)`
  position: absolute;
  top: -20px;
  left: 300px;
  transform: rotate(30deg);
`;

export const SiTypescriptStyled = styled(SiTypescript)`
  position: absolute;
  top: 70px;
  right: 40px;
  transform: rotate(30deg);
`;

export const SiNextDotJsStyled = styled(SiNextDotJs)`
  position: absolute;
  bottom: 30px;
  right: 300px;
`;

export const DiJavascript1Styled = styled(DiJavascript1)`
  position: absolute;
  bottom: 30px;
  left: 300px;
  transform: rotate(-40deg);
`;
