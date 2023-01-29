import styled from '@emotion/styled';
import { downXl } from '../styles/mediaQuery';

export const Main = styled.main`
  min-height: 100vh;
  background-color: var(--semilight-blue);
  padding-top: var(--header-height);
  ${downXl} {
    padding-top: 64px;
  }
`;
