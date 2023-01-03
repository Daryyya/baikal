import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import Link from "../../kit/Link";
import { StyledHeader, Container } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Image src={logo} alt="logo" width={163} height={40} />
        <Link page="/contact" variant='white'>Связаться</Link>
      </Container>
    </StyledHeader>
  );
};

export default Header;
