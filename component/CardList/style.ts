import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  gap: 4px;
  width: 100%;
  max-height: 403px;
  overflow-y: scroll;

  @media (max-width: 1200px) {
    max-height: calc(100vh - 150px);
    overflow-y: auto;
  }
`;
