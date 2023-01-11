import React, { useState } from "react";
import DesktopSearchForm from "../../component/DesktopSearchForm";
import MobileSearchForm from "../../component/MobileSearchForm";
import { Container, RightColumn, LeftColumn, Title } from "../../styles/order";
import CardList from "../../component/CardList";
import OrderForm from "../../component/OrderForm";
import MobileOrderModal from "../../component/MobileOrderModal";

const Order = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Container>
      <LeftColumn>
        <Title>Выберите мебель, которую нужно перевезти</Title>
        <DesktopSearchForm setSearchValue={setSearchValue}/>
        <MobileSearchForm setSearchValue={setSearchValue}/>
        <CardList searchValue={searchValue}/>
      </LeftColumn>
      <RightColumn>
        <Title>Затем заполните следующие поля выбранного элемента:</Title>
        <OrderForm/>
      </RightColumn>
      <MobileOrderModal />
    </Container>
  );
};

export default Order;
