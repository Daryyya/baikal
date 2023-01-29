import styled from '@emotion/styled';
import { downSm, upXl } from '../../styles/mediaQuery';

export const Wrapper = styled.div`
  background-color: var(--semilight-blue);
  max-width: 435px;
  margin: 0 auto;
  padding: 40px 50px 0;
  ${upXl} {
    display: none;
  }
  ${downSm} {
    padding: 30px 20px 0;
  }
`;

export const DirectionP = styled.p`
  margin-bottom: 42px;
  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  font-weight: 600;
  color: var(--grey);
  & svg {
    position: relative;
    bottom: 2px;
  }
`;

export const StyledP = styled.p`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
  &:last-of-type {
    margin-bottom: 54px;
  }
  font-weight: 400;
  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
  display: flex;
  justify-content: space-between;
`;
