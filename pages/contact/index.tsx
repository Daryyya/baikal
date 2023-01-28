import Image from 'next/image';
import React from 'react';
import inst from '../../public/img/instagram.png';
import fb from '../../public/img/facebook.png';
import whats from '../../public/img/whatsapp.png';
import weChat from '../../public/img/weChat.png';
import {
  Wrapper,
  ContactColumn,
  Title,
  StyledH2,
  Social,
  StyledP,
  StyledPLink,
  DesktopContactForm,
  StyledMobileButton,
} from '../../styles/contact';
// import ContactForm from '../../component/ContactForm';

const Contact = () => {
  return (
    <Wrapper>
      <ContactColumn>
        <Title>Свяжитесь с нами</Title>
        <StyledH2>Наши данные:</StyledH2>
        <StyledPLink>
          <span>Наша почта:</span> <a href="mailto:asia@baikalvl.ru">asia@baikalvl.ru</a>
        </StyledPLink>
        <StyledPLink>
          <span>Телефон:</span> <a href="tel:8 800 201-87-77">8 800 201-87-77</a>
        </StyledPLink>
        <StyledMobileButton type="button" variant="white">
          Связаться
        </StyledMobileButton>
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
      </ContactColumn>
      <DesktopContactForm />
    </Wrapper>
  );
};

export default Contact;
