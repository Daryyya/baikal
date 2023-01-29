import styled from '@emotion/styled';
import Button from '../kit/Button';
import Link from '../kit/Link';
import CartSum from '../component/CartSum';
import { downXl } from './mediaQuery';

export const Wrapper = styled.div`
  min-height: calc(100vh - var(--header-height));
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 97px;
  ${downXl} {
    min-height: calc(100vh - 64px);
    max-width: 375px;
    padding: 0;
  }
`;

export const EmptyWarning = styled.div`
  margin: 10vh auto;
  text-align: center;
  font-size: 30px;
  display: grid;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 1;
  letter-spacing: -1px;
  color: var(--grey);
  ${downXl} {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.2px;
    margin: 20px 0 30px;
    padding: 0 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: end;
  text-align: center;
  margin-bottom: 48px;
`;

export const StyledButton = styled(Button)`
  padding: 19px 50px;
  ${downXl} {
    padding: 19px 35px;
    flex: 1 0 calc(50% - 6px);
  }
`;

export const StyledLink = styled(Link)`
  padding: 19px 50px;
  ${downXl} {
    padding: 19px 35px;
    flex: 1 0 calc(50% - 6px);
  }
`;

export const StyledCartSum = styled(CartSum)`
  ${downXl} {
    display: none;
  }
`;
