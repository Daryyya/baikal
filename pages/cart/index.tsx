import { observer } from 'mobx-react';
import React, { useState } from 'react';
import Image from 'next/image';
import OrderList from '../../component/OrderList';
import Table from '../../component/Table';
import { myOrderFormData } from '../../store/orderFormData';
import {
  Wrapper,
  ButtonsWrapper,
  StyledButton,
  StyledLink,
  Title,
  EmptyWarning,
  StyledCartSum,
} from '../../styles/cart';
import sofa from '../../public/img/sofa.png';
import MobileCartSum from '../../component/MobileCartSum';
import MobilePopup from '../../kit/MobilePopup';
import MobileHeaderContent from '../../kit/MobileHeaderContent';

const Cart = observer(() => {
  const [isCounted, setIsCounted] = useState(false);
  const order = myOrderFormData.getState();
  return (
    <Wrapper>
      {!!order.length && <Title>Добавленная мебель ({order.length})</Title>}
      {order.length ? (
        <>
          <Table />
          {!isCounted && <OrderList />}
        </>
      ) : (
        <EmptyWarning>
          <Image src={sofa} alt="диван" />
          Корзина пуста
        </EmptyWarning>
      )}
      <ButtonsWrapper>
        <StyledLink variant="blue" href="/order">
          Добавить
        </StyledLink>
        {!!order.length && (
          <StyledButton variant="blue" type="button" onClick={() => setIsCounted(true)}>
            Рассчитать
          </StyledButton>
        )}
      </ButtonsWrapper>
      {!!order.length && isCounted && (
        <>
          <MobileHeaderContent onClick={() => setIsCounted(false)} />
          <MobilePopup>
            <MobileCartSum />
          </MobilePopup>
        </>
      )}
      {!!order.length && isCounted && <StyledCartSum />}
    </Wrapper>
  );
});

export default Cart;
