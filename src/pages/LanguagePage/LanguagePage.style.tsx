import { TbBrandNextjs } from "react-icons/tb";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { MAX_WIDTH } from "../../constants/constants";

export const LanguagePageStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;
  background: ${COLORS.BackgroundDark};

  padding-top: 200px;
  overflow: hidden;

  h1 {
    margin-top: 60px;
    font-size: 90px;
    color: ${COLORS.TextColor};
  }

  & > * {
    z-index: 2;
  }

  padding-bottom: 200px;
`;

export const TextContainerStyled = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #4a44583a;
  backdrop-filter: blur(16px);
  border-radius: 16px;
  border: 1px solid ${COLORS.BorderColor};
  color: ${COLORS.TextColor};
  margin-top: 40px;
  padding: 30px;
  z-index: 2;
  font-size: 20px;
  letter-spacing: 0.02em;
  line-height: 24px;
  font-weight: 200;

  h3 {
    margin-bottom: 10px;
  }
`;

export const TbBrandNextjsStyled = styled(TbBrandNextjs)`
  position: absolute;
  left: -400px;
  top: -200px;
  z-index: 1;
`;
