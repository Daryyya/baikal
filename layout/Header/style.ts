import styled from '@emotion/styled';
import NextLink from 'next/link';
import Link from '../../kit/Link';
import { downXl, downMd, upMd } from '../../styles/mediaQuery';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--semilight-blue);

  ${downXl} {
    height: 64px;
    margin: 0 auto;
  }
`;

export const DesktopStyledLink = styled(Link)`
  ${downMd} {
    display: none;
  }
`;

export const BurgerMenu = styled(NextLink)`
  padding: 4px;

  &:hover {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  }

  ${upMd} {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 46px 97px;

  ${downXl} {
    padding: 20px 21px 0;
  }
`;

export const StyledP = styled.p`
  font-size: 17;
  line-height: 1;
  letter-spacing: 0.2px;
  font-weight: 600;
  color: var(--grey);
  & svg {
    position: relative;
    bottom: 2px;
  }
`;
