import styled from '@emotion/styled';
import { downXl } from '../../styles/mediaQuery';

export const Wrapper = styled.div`
  display: grid;
  gap: 4px;
  width: 100%;
  max-height: 403px;
  overflow-y: scroll;

  ${downXl} {
    max-height: calc(100vh - 150px);
    overflow-y: auto;
  }
`;
