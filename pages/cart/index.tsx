import React from "react";
import Table from "../../component/Table";
import {
  Wrapper,
  ButtonsWrapper,
  StyledButton,
  StyledLink,
} from "../../styles/cart";

const Cart = () => {

  return (
    <Wrapper>
      <Table/>
      <ButtonsWrapper>
        <StyledLink variant="blue" page="/order">
          Добавить
        </StyledLink>
        <StyledButton variant="blue" type="button">
          Рассчитать
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Cart;
