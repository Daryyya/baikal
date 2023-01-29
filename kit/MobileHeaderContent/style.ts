import styled from '@emotion/styled';
import { downXl, downMd, downXs } from '../../styles/mediaQuery';

export const Component = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  top: 0;
  z-index: 12;
  background-color: var(--semilight-blue);
  height: 65px;

  ${downXl} {
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    width: 375px;
    padding: 0 20px;
  }
  ${downMd} {
    left: 20px;
    transform: none;
    width: calc(100% - 79px);
  }
  ${downXs} {
    padding: 0;
  }
`;

export const Button = styled.button`
  padding: 4px;
  display: block;
  flex: 0 0 37px;
  margin-right: 15px;
`;
