import React, { useState } from "react";
import SearchForm from "../../component/SearchForm";
import { Container, RightColumn, LeftColumn, Title } from "../../styles/order";
import CardList from "../../component/CardList";
import OrderForm from "../../component/OrderForm";

const Order = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Container>
      <LeftColumn>
        <Title>Выберите мебель, которую нужно перевезти</Title>
        <SearchForm setSearchValue={setSearchValue}/>
        <CardList searchValue={searchValue}/>
      </LeftColumn>
      <RightColumn>
        <Title>Затем заполните следующие поля выбранного элемента:</Title>
        <OrderForm/>
      </RightColumn>
    </Container>
  );
};

export default Order;
