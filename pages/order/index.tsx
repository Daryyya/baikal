import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import DesktopSearchForm from '../../component/DesktopSearchForm';
import MobileSearchForm from '../../component/MobileSearchForm';
import MobileHeaderContent from '../../component/MobileHeaderContent';
import CardList from '../../component/CardList';
import OrderForm from '../../component/OrderForm';
import MobilePopup from '../../component/MobilePopup';
import { myOrderFormData } from '../../store/orderFormData';
import { Container, RightColumn, LeftColumn, Title, MobileCartLink } from '../../styles/order';

const Order = observer(() => {
  const { back } = useRouter();
  const order = myOrderFormData.getState();
  const checkedItem = myOrderFormData.getCheckedItem();
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container>
      <LeftColumn>
        <Title>Выберите мебель, которую нужно перевезти</Title>
        <DesktopSearchForm setSearchValue={setSearchValue} />
        <MobileHeaderContent onClick={checkedItem ? myOrderFormData.removeCheckedItem : back}>
          {!checkedItem && <MobileSearchForm setSearchValue={setSearchValue} />}
        </MobileHeaderContent>
        <CardList searchValue={searchValue} />
      </LeftColumn>
      <RightColumn>
        <Title>Затем заполните следующие поля выбранного элемента:</Title>
        <OrderForm />
      </RightColumn>
      {checkedItem && (
        <MobilePopup>
          <OrderForm />
        </MobilePopup>
      )}
      {!!order.length && !checkedItem?.key && (
        <MobileCartLink variant="blue" href="/cart">
          Корзина&nbsp;({order.length})
        </MobileCartLink>
      )}
    </Container>
  );
});

export default Order;
