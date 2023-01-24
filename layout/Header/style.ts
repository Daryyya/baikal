import styled from '@emotion/styled';
import NextLink from 'next/link';
import Link from '../../kit/Link';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--semilight-blue);

  @media (max-width: 1200px) {
    height: 64px;
    margin: 0 auto;
  }
`;

export const DesktopStyledLink = styled(Link)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = styled(NextLink)`
  padding: 4px;

  &:hover {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 768.1px) {
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

  @media (max-width: 1200px) {
    padding: 20px 21px 0;
  }
`;
