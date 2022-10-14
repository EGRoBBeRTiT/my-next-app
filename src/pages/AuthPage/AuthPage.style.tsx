import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const AuthPageStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0 20px;
  overflow: hidden;

  background-color: ${COLORS.BackgroundDark};

  & > svg {
    position: absolute;
    right: -300px;
    bottom: -200px;
  }
`;
