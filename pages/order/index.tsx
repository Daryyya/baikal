import React, { useState } from "react";
import { observer } from "mobx-react";
import DesktopSearchForm from "../../component/DesktopSearchForm";
import MobileSearchForm from "../../component/MobileSearchForm";
import { Container, RightColumn, LeftColumn, Title, MobileCartLink } from "../../styles/order";
import CardList from "../../component/CardList";
import OrderForm from "../../component/OrderForm";
import MobileOrderModal from "../../component/MobileOrderModal";
import { myOrderFormData } from "../../store/orderFormData";

const Order = observer(({}) => {
  const order = myOrderFormData.getState();
  const checkedItem = myOrderFormData.getCheckedItem();
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
      {!!order.length && !checkedItem?.key && (
        <MobileCartLink variant="blue" page="/cart">
          Корзина&nbsp;({order.length})
        </MobileCartLink>
      )}
    </Container>
  );
});

export default Order;
