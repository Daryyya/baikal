import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import { StyledHeader, Container, StyledLink } from "./style";
import NextLink from 'next/link'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NextLink href='/'>
        <Image src={logo} alt="logo" width={163} height={40} />
        </NextLink>
        <StyledLink page="/contact" variant='white'>Связаться</StyledLink>
      </Container>
    </StyledHeader>
  );
};

export default Header;
