import React from "react";
import { Container } from "./style";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import Button from "../../kit/Button";

const Header = () => {
  return (
    <header>
      <Container>
        <Image src={logo} alt="logo" width={163} height={40} />
        <Button page="/contact" />
      </Container>
    </header>
  );
};

export default Header;
