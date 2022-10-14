import styled, { css } from "styled-components";
import { COLORS } from "../../constants/colors";
import { InputProps } from "./Input.types";

export const InputStyled = styled.input<InputProps>`
  width: 100%;
  height: 56px;
  padding: 20px;
  background: transparent;
  border: 2px solid ${COLORS.BorderColor};
  border-radius: 8px;

  &:focus {
    border-color: ${COLORS.TextColor};
  }
  &:active {
    border-color: ${COLORS.TextColor};
  }

  font-size: 18px;
  font-weight: 200;
  color: ${COLORS.TextColor};

  transition: all 0.2s ease;

  ${({ withError }) =>
    withError &&
    css`
      border-color: ${COLORS.ErrorRed};
    `}

  &::placeholder {
    color: ${COLORS.BorderColor};
  }
`;
