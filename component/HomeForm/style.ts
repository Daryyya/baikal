import styled from '@emotion/styled';
import Button from '../../kit/Button';
import Tooltip from './Tooltip';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: fit-content;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
  }
`;

export const StyledButton = styled(Button)`
  height: 67px;
  margin-left: 12px;
  @media (max-width: 1200px) {
    grid-column: 1 / 3;
    display: block;
    margin: 4px auto 0;
    padding: 19px 30px;
    font-size: 17px;
    line-height: 1;
    width: 100%;
  }
`;

export const DesktopButtonContent = styled.span`
  @media (max-width: 1200.2px) {
    display: none;
  }
`;

export const MobileButtonContent = styled.span`
  @media (min-width: 1200.1px) {
    display: none;
  }
`;

export const StyledTooltipOne = styled(Tooltip)`
  top: 110px;

  @media (max-width: 1200.2px) {
    display: none;
  }
`;

export const StyledSvgOne = styled.svg`
  position: relative;
  top: 3px;
  margin-left: 13px;
`;

export const StyledTooltipTwo = styled(Tooltip)`
  right: 0;
  top: -50px;

  @media (max-width: 1200.2px) {
    display: none;
  }
`;

export const StyledSvgTwo = styled(StyledSvgOne)`
  transform: rotate(180deg);
  top: 5px;
`;
