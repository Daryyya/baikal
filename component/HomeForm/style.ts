import styled from '@emotion/styled';
import Button from '../../kit/Button';
import Tooltip from './Tooltip';
import { downXl, upXl } from '../../styles/mediaQuery';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: fit-content;
  padding-bottom: 210px;
  ${downXl} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
  }
`;

export const StyledButton = styled(Button)`
  font-family: 'Roboto';
  font-weight: 500;
  height: 67px;
  margin-left: 12px;
  ${downXl} {
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
  ${downXl} {
    display: none;
  }
`;

export const MobileButtonContent = styled.span`
  ${upXl} {
    display: none;
  }
`;

export const StyledTooltipOne = styled(Tooltip)`
  top: 110px;

  ${downXl} {
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

  ${downXl} {
    display: none;
  }
`;

export const StyledSvgTwo = styled(StyledSvgOne)`
  transform: rotate(180deg);
  top: 5px;
`;
