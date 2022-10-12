import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ButtonStyled = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 100px;
  background-color: ${COLORS.BorderColor};
  transition: 0.1s linear;
  cursor: pointer;

  color: ${COLORS.TextColor};

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background: rgba(232, 222, 248, 0.08);
  }

  &:active {
    background: rgba(232, 222, 248, 0.12);
  }
`;
