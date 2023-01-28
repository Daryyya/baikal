import Image from 'next/image';
import React from 'react';
import inst from '../../public/img/instagram.png';
import fb from '../../public/img/facebook.png';
import whats from '../../public/img/whatsapp.png';
import weChat from '../../public/img/weChat.png';
import Link from '../../kit/Link';
import {Wrapper, Title, StyledH2, Social, StyledP, StyledPLink, StyledInput, InputWrap, Textarea, TextareaName} from '../../styles/contact'

const Contact = () => {
  return (
    <Wrapper>
      <div>
        <Title>Свяжитесь с нами</Title>
        <StyledH2>Наши данные:</StyledH2>
        <StyledPLink>
          Наша почта: <a href="mailto:asia@baikalvl.ru">asia@baikalvl.ru</a>
        </StyledPLink>
        <StyledPLink>
          Телефон: <a href="tel:8 800 201-87-77">8 800 201-87-77</a>
        </StyledPLink>
        <StyledH2>Мы в соц. сетях:</StyledH2>
        <Social>
          <StyledP>
            <Image src={inst} alt="instagram" width={50} height={50} />
            <span>Instagram</span>
          </StyledP>
          <StyledP>
            <Image src={fb} alt="facebook" width={50} height={50} />
            <span>Facebook</span>
          </StyledP>
          <StyledP>
            <Image src={whats} alt="whatsapp" width={50} height={50} />
            <span>Whatsapp</span>
          </StyledP>
         
          <StyledP>
            <Image src={weChat} alt="weChat" width={50} height={50} />
            <span>WeChat</span>
          </StyledP>
        </Social>
      </div>
      <form>
        <InputWrap>
        <StyledInput type='text' placeholder='Имя и фамилия'/>
        <StyledInput type='email' placeholder='Почта'/>
        <StyledInput type='tel' placeholder='Телефон'/>
        </InputWrap>
        <TextareaName>Опишите ваш запрос</TextareaName>
        <Textarea />
         
        <Link href="/" variant="blue">
          Связаться по доставке
        </Link>
        <p>Нажимая на кнопку, вы даете <span>согласие на обработку</span> согласие на обработку своих персональных данных</p>
      </form>
    </Wrapper>
  );
};

export default Contact;
