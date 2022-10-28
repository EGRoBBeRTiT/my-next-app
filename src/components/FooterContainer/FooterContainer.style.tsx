import { Form } from "react-final-form";
import { TbBrandNextjs } from "react-icons/tb";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { MAX_WIDTH } from "../../constants/constants";
import { Button } from "../Button";

export const FooterContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background: ${COLORS.BackgroundDark};
  border-top: 1px solid ${COLORS.BorderColor};
  overflow: hidden;
  padding-bottom: 600px;
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  border-radius: 8px;
`;

export const ContentStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 40px;
  z-index: 2;

  h1 {
    color: ${COLORS.TextColor};
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 30px;
  }
`;

export const FormStyled = styled.div`
  position: absolute;
  top: 390px;
  left: 236px;
  display: flex;
  width: 500px;
  gap: 16px;
  height: 56px;
  transform: rotate(54deg);

  input {
    width: 300px;
  }

  button {
    width: 160px;
    height: 56px;
    font-size: 16px;
  }
`;

export const TbBrandNextjsStyled = styled(TbBrandNextjs)`
  position: absolute;
  top: -200px;
  z-index: 1;
`;
