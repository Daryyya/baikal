import styled from '@emotion/styled';
import Input from '../../kit/Input';

export const Form = styled.form`
  flex: 1 1 100%;

  & label {
    width: 100%;
    height: 32px;
  }
`;

export const StyledInput = styled(Input)`
  max-width: 100% !important;
  background-color: inherit;
  border-bottom: 1.5px solid var(--light-grey);
  border-radius: 0;

  @media (max-width: 1200px) {
    padding: 7px 2px;
    height: auto;
  }
  @media (max-width: 375px) {
    min-width: 180px;
  }
`;
