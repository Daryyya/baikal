import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Select from '../../../kit/Select';

interface Props {
  firstChild?: boolean;
  lastChild?: boolean;
}

const firstStyle = css`
  @media (min-width: 1200px) {
    .react-select__control {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
`;

export const StyledSelect = styled(Select)<Props>`
  @media (min-width: 1200px) {
    .react-select__control {
      border-radius: 0;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 1px;
        background-color: var(--light-grey);
        height: 47px;
      }
    }
  }

  ${({ firstChild }) => firstChild && firstStyle}
`;
