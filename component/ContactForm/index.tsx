import React, { FC } from 'react';
import {
  AgreementLink,
  AgreementP,
  InputWrap,
  StyledInput,
  SubmitButton,
  Textarea,
  StyledP,
  StyledForm,
  MobileTitle,
} from './style';

interface Props {
  className?: string;
}

const ContactForm: FC<Props> = ({ className }) => {
  return (
    <StyledForm className={className}>
      <MobileTitle>Связаться по доставке</MobileTitle>
      <StyledP>Данные для связи</StyledP>
      <InputWrap>
        <StyledInput type="text" placeholder="Имя и фамилия" />
        <StyledInput type="email" placeholder="Почта" />
        <StyledInput type="tel" placeholder="Телефон" />
      </InputWrap>
      <StyledP>Опишите ваш запрос</StyledP>
      <Textarea />
      <SubmitButton type="submit" variant="blue">
        Связаться по доставке
      </SubmitButton>
      <AgreementP>
        Нажимая на кнопку, вы даете {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <AgreementLink href="#">согласие на обработку</AgreementLink> согласие на обработку своих персональных данных
      </AgreementP>
    </StyledForm>
  );
};

export default ContactForm;
