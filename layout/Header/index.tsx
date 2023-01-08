import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import Link from "../../kit/Link";
import { StyledHeader, Container } from "./style";
import NextLink from 'next/link'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NextLink href='/'>
        <Image src={logo} alt="logo" width={163} height={40} />
        </NextLink>
        <Link page="/contact" variant='white'>Связаться</Link>
      </Container>
    </StyledHeader>
  );
};

export default Header;
