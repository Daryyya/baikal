import styled from '@emotion/styled';
import BaseInput from '../../../kit/Input';
import { upXl, downXl, downXs } from '../../../styles/mediaQuery';

export const Input = styled(BaseInput)`
  padding: 15px 30px;
  height: 64px;
  font-weight: 600;

  ${upXl} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  ${downXl} {
    max-width: 162px;
    padding: 14px 17px;
    height: 58px;
  }
  ${downXs} {
    min-width: 138px;
  }
`;
