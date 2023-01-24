import { observer } from 'mobx-react';
import React from 'react';
import Image from 'next/image';
import OrderList from '../../component/OrderList';
import Table from '../../component/Table';
import { myOrderFormData } from '../../store/orderFormData';
import { Wrapper, ButtonsWrapper, StyledButton, StyledLink, Title, EmptyWarning } from '../../styles/cart';
import sofa from '../../public/img/sofa.png';

const Cart = observer(() => {
  const order = myOrderFormData.getState();
  return (
    <Wrapper>
      {!!order.length && <Title>Добавленная мебель ({order.length})</Title>}
      {order.length ? (
        <>
          <Table />
          <OrderList />
        </>
      ) : (
        <EmptyWarning>
          <Image src={sofa} alt="диван" />
          Корзина пуста
        </EmptyWarning>
      )}
      <ButtonsWrapper>
        <StyledLink variant="blue" page="/order">
          Добавить
        </StyledLink>
        {!!order.length && (
          <StyledButton variant="blue" type="button">
            Рассчитать
          </StyledButton>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
});

export default Cart;
