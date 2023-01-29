import styled from '@emotion/styled';
import Image from 'next/image';
import { downXl, downMd } from './mediaQuery';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - var(--header-height));
  ${downXl} {
    min-height: calc(100vh - 64px);
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 110px 97px 0;
  position: relative;
  ${downXl} {
    max-width: 375px;
    padding: 35px 21px 0;
  }
`;

export const BackgroundImage = styled(Image)`
  object-fit: contain;
  object-position: right bottom;
  pointer-events: none;
  ${downMd} {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -1px;
  color: var(--grey);
  margin-bottom: 48px;
  ${downXl} {
    font-weight: 300;
    font-size: 31px;
    line-height: 40px;
  }
`;
