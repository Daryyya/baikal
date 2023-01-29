import styled from '@emotion/styled';
import Input from '../../kit/Input';
import { downXl, downXs } from '../../styles/mediaQuery';

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

  ${downXl} {
    padding: 7px 2px;
    height: auto;
  }
  ${downXs} {
    min-width: 180px;
  }
`;
