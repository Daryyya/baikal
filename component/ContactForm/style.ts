import styled from '@emotion/styled';
import Button from '../../kit/Button';
import Input from '../../kit/Input';
import { downXl, downXs } from '../../styles/mediaQuery';

export const StyledForm = styled.form`
  padding-top: 134px;

  ${downXl} {
    max-width: 375px;
    margin: 0 auto;
    background-color: var(--white);
    padding: 0px 20px;
  }
`;

export const MobileTitle = styled.h1`
  display: none;
  ${downXl} {
    display: block;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: 0.2px;
    color: var(--grey);
    margin-bottom: 24px;
  }
`;

export const StyledInput = styled(Input)`
  height: 53px;
  width: 246px;
  ${downXl} {
    border: 1px solid var(--light-grey);
    border-radius: 3px;
    width: 335px;
  }
  ${downXs} {
    width: 300px;
  }

  &::placeholder {
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.2px;
    color: var(--light-grey);
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 48px;
  ${downXl} {
    margin-bottom: 24px;
  }
`;

export const Textarea = styled.textarea`
  resize: vertical;
  background-color: var(--white);
  display: block;
  margin-bottom: 20px;
  width: 502px;
  height: 124px;
  padding: 10px;
  border-radius: 3px;
  ${downXl} {
    max-width: 335px;
    border: 1px solid var(--light-grey);
    border-radius: 3px;
  }
  ${downXs} {
    max-width: 300px;
  }
`;

export const StyledP = styled.p`
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
  &:first-of-type {
    display: none;
  }
  ${downXl} {
    &:first-of-type {
    display: block;
  }
  }
`;

export const SubmitButton = styled(Button)`
  padding: 19px 31px;
  margin-bottom: 20px;
  border-radius: 5px;
  ${downXl} {
   width: 100%;
  }
  ${downXs} {
    max-width: 300px;
  }
`;

export const AgreementP = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0.2px;
  color: var(--light-grey);
  ${downXl} {
   font-size: 16px;
  }
`;

export const AgreementLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: var(--grey);
`;
