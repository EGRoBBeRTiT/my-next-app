import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { MAX_WIDTH } from "../../constants/constants";

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  max-width: 100vw;
  height: 120px;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${MAX_WIDTH};
  height: 80px;
  padding: 10px 10px;

  border: 2px solid ${COLORS.BorderColor};
  border-radius: 8px;
`;
