import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import menu from "../../public/img/menu.svg";
import close from "../../public/img/close.svg";
import { StyledHeader, Container, DesktopStyledLink, BurgerMenu } from "./style";
import NextLink from 'next/link'
import NextImage from 'next/image'
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  
  return (
    <StyledHeader>
      <Container>
        <NextLink href='/'>
        <Image src={logo} alt="logo" width={163} height={40} />
        </NextLink>
        <DesktopStyledLink page="/contact" variant='white'>Связаться</DesktopStyledLink>
        <BurgerMenu href={router.route === '/contact' ? '/' : '/contact'}>
          <NextImage
            src={router.route === '/contact' ? close : menu}
            width={22}
            height={22}
            alt=""
          />
        </BurgerMenu>
      </Container>
    </StyledHeader>
  );
};

export default Header;
