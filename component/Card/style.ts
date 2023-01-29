import styled from '@emotion/styled';
import Image from 'next/image';
import Button from '../../kit/Button';
import { downXl } from '../../styles/mediaQuery';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--barely-grey);
  border: 1px solid #e2e4ea;
  border-radius: 3px;
  padding-right: 27px;

  ${downXl} {
    padding: 0 13px 0 20px;
  }
`;

export const StyledImage = styled(Image)`
  height: 97px;
  ${downXl} {
    width: 69px;
    height: 48px;
  }
`;

export const ItemName = styled.p`
  text-align: center;
  font-size: 17px;
  color: var(--grey);

  ${downXl} {
    margin: 0 20px;
    font-size: 12px;
    line-height: 1;
  }
`;

export const StyledButton = styled(Button)`
  min-width: 137px;
  padding: 14px 30px;

  ${downXl} {
    padding: 10px;
    min-width: 68px;
    font-size: 10px;
    line-height: 1;
  }
`;
