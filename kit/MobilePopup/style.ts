import styled from '@emotion/styled';

export const Popup = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  overflow-y: auto;
  z-index: 1;

  @media (min-width: 1200px) {
    display: none;
  }
`;
