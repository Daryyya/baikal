import styled from "@emotion/styled";
import Button from "../../kit/Button";
import Tooltip from "./Tooltip";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: fit-content;
`;

export const StyledButton = styled(Button)`
  height: 67px;
  margin-left: 12px;
  @media (max-width: 1200px) {
    display: block;
    margin: 24px auto 0;
    padding: 19px 94px;
    font-size: 17px;
    line-height: 1;
  }
`;

export const StyledTooltipOne = styled(Tooltip)`
  top: 110px;
`;

export const StyledSvgOne = styled.svg`
  position: relative;
  top: 3px;
  margin-left: 13px;
`;

export const StyledTooltipTwo = styled(Tooltip)`
  right: 0;
  top: -50px;
`;

export const StyledSvgTwo = styled(StyledSvgOne)`
  transform: rotate(180deg);
  top: 5px;
`;


