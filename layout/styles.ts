import styled from '@emotion/styled';

export const Main = styled.main`
  min-height: 100vh;
  background-color: var(--semilight-blue);
  padding-top: var(--header-height);
  @media (max-width: 1200px) {
    padding-top: 64px;
  }
`;
