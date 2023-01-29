import styled from '@emotion/styled';
import Button from '../../kit/Button';
import Input from '../../kit/Input';

export const StyledForm = styled.form`
  padding-top: 134px;

  @media (max-width: 1200px) {
    max-width: 375px;
    margin: 0 auto;
    background-color: var(--white);
    padding: 0px 20px;
  }
`;

export const MobileTitle = styled.h1`
  display: none;
  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
    border: 1px solid var(--light-grey);
    border-radius: 3px;
    width: 335px;
  }
  @media (max-width: 375px) {
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
  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
    max-width: 335px;
    border: 1px solid var(--light-grey);
    border-radius: 3px;
  }
  @media (max-width: 375px) {
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
  @media (max-width: 1200px) {
    &:first-of-type {
    display: block;
  }
  }
`;

export const SubmitButton = styled(Button)`
  padding: 19px 31px;
  margin-bottom: 20px;
  border-radius: 5px;
  @media (max-width: 1200px) {
   width: 100%;
  }
  @media (max-width: 375px) {
    max-width: 300px;
  }
`;

export const AgreementP = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0.2px;
  color: var(--light-grey);
  @media (max-width: 1200px) {
   font-size: 16px;
  }
`;

export const AgreementLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: var(--grey);
`;
