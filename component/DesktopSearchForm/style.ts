import styled from '@emotion/styled';
import Button from '../../kit/Button';
import Input from '../../kit/Input';
import { downXl } from '../../styles/mediaQuery';

export const StyledForm = styled.form`
  display: flex;
  margin-bottom: 58px;

  ${downXl} {
    display: none;
  }
`;

export const StyledInput = styled(Input)`
  min-width: 370px;
  font-size: 15px;
  line-height: 1;
  margin-right: 8px;
  &::placeholder {
    font-family: 'Open Sans';
    font-weight: 400;
  }
`;

export const StyledButton = styled(Button)`
  padding: 18px 30px;
`;
