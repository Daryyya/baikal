import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import Button from "../../kit/Button";
import { StyledHeader, Container } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Image src={logo} alt="logo" width={163} height={40} />
        <Button page="/contact" />
      </Container>
    </StyledHeader>
  );
};

export default Header;
