import styled from '@emotion/styled';
import Button from '../../kit/Button';
import Input from '../../kit/Input';

export const StyledForm = styled.form`
  padding-top: 134px;
`;

export const StyledInput = styled(Input)`
  height: 53px;
  width: 246px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 48px;
`;

export const Textarea = styled.textarea`
  background-color: var(--white);
  display: block;
  margin-bottom: 20px;
  width: 502px;
  height: 124px;
  padding: 10px;
  border-radius: 3px;
`;

export const TextareaName = styled.p`
  margin-bottom: 20px;
  font-size: 17px;
  line-height: 1;
  letter-spacing: 0.2px;
  color: var(--grey);
`;

export const SubmitButton = styled(Button)`
  padding: 19px 31px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const AgreementP = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0.2px;
  color: var(--light-grey);
`;

export const AgreementLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: var(--grey);
`;
