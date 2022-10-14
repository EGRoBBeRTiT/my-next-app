import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const CardStyled = styled.div`
  width: 100%;
  max-width: 280px;
  height: 100%;
  max-height: 480px;
  border: 1px solid ${COLORS.BackgroundDark};
  border-radius: 28px;
  padding: 24px;
  background: linear-gradient(
      0deg,
      rgba(208, 188, 255, 0.11),
      rgba(208, 188, 255, 0.11)
    ),
    #1c1b1f;
  transition: all 0.2s ease;

  color: ${COLORS.TextColor2};
  cursor: pointer;

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

  &:hover {
    border: 1px solid ${COLORS.BorderColor};
    transform: scale(1.01, 1.01);

    box-shadow: 0px 200.13px 116.876px rgba(18, 29, 68, 0.03),
      0px 100.162px 58.4949px rgba(74, 102, 201, 0.02281),
      0px 60.3332px 35.2346px rgba(74, 102, 201, 0.0195477),
      0px 38.6647px 22.5802px rgba(74, 102, 201, 0.0171268),
      0px 25.0593px 14.6346px rgba(74, 102, 201, 0.015),
      0px 15.7746px 9.21234px rgba(74, 102, 201, 0.0128732),
      0px 9.06347px 5.29306px rgba(74, 102, 201, 0.0104523),
      0px 3.98907px 2.32961px rgba(74, 102, 201, 0.00719002);
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;
