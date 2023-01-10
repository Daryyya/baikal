import React from "react";
import { observer } from "mobx-react";
import { myOrderFormData } from "../../store/orderFormData";
import Table from "../../component/Table";
import {Style, Wrapper, ButtonsWrapper, StyledButton, StyledLink, Title} from '../../styles/cart';

const columns = [
  { Header: " ", accessor: "id" },
  { Header: "Кол-во", accessor: "amount" },
  { Header: "Общая масса нетто, кг", accessor: "netWeight" },
  { Header: "Общая масса брутто, кг", accessor: "grossWeight" },
  { Header: "Общий объем, м3", accessor: "volume" },
  { Header: "Стоимость единицы", accessor: "cost" },
  { Header: "Удалить", accessor: "delete" },
];

const Cart = observer(() => {
  const order = myOrderFormData.getState();
  
  return (
    <Wrapper>
      <Title>Добавленная мебель({order.length})</Title>
      <Style><Table data={order} columns={columns} /></Style>

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
});

export default Cart;
