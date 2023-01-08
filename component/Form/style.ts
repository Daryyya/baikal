import styled from "@emotion/styled";
import Button from "../../kit/Button";
import Tooltip from "./Tooltip";

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: fit-content;
`;

export const StyledButton = styled(Button)`
  height: 67px;
  margin-left: 12px;
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


