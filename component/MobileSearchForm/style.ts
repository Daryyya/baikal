import styled from '@emotion/styled';
import Input from '../../kit/Input';

export const Form = styled.form`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 12;
  background-color: var(--semilight-blue);
  height: 63px;

  @media (max-width: 1200px) {
    left: 50%;
    transform: translateX(-50%);
    width: 375px;
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    left: 20px;
    transform: none;
    width: calc(100% - 88px);
  }
  @media (max-width: 375px) {
    padding: 0;
  }

  & label {
    width: 100%;
    height: 32px;
  }

  @media (min-width: 1200.1px) {
    display: none;
  }
`;

export const BackButton = styled.button`
  padding: 4px;
  display: block;
  flex: 1 0 37px;
  margin-right: 15px;
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
