import styled from '@emotion/styled';
import Link from '../kit/Link';
import { downXl, downXxl, upXl } from './mediaQuery';


export const Container = styled.div`
  max-width: 1440px;
  min-height: calc(100vh - var(--header-height));
  padding: 0 97px 85px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 630fr 497fr;
  gap: 119px;
  justify-content: space-between;

  ${downXl} {
    min-height: calc(100vh - 64px);
    display: block;
    max-width: 375px;
    padding: 0 0 45px;
  }
`;

export const RightColumn = styled.div`
  ${downXl} {
    display: none;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2`
  letter-spacing: -1px;
  color: var(--grey);
  font-size: 36px;
  margin-bottom: 42px;

  ${downXxl} {
    font-size: 30px;
  }

  ${downXl} {
    display: none;
  }
`;

export const MobileCartLink = styled(Link)`
  position: fixed;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 34px;
  z-index: 2;

  ${upXl} {
    display: none;
  }
`;
