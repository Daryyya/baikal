import styled from '@emotion/styled';
import Input from '../../../kit/Input';

interface InputProps {
  withRedOutline: boolean;
}

export const StyledInput = styled(Input)<InputProps>`
  font-family: 'Open Sans';
  font-weight: 400;

  outline: ${({ withRedOutline }) => (withRedOutline ? '1px solid red' : 'none')} !important;
`;
