import { observer } from 'mobx-react';
import React from 'react';
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
  StyledP,
  Sum,
  BottomLinksWrapper,
  StyledSaveLink,
} from '../../styles/cart';
import sofa from '../../public/img/sofa.png';

const Cart = observer(() => {
  const order = myOrderFormData.getState();
  const totalValue = myOrderFormData.getTotalValue();
  const deliveryCost = totalValue.totalVolume * 300;
  const customCost = totalValue.totalGrossWeight * 2.5;
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
        <StyledLink variant="blue" href="/order">
          Добавить
        </StyledLink>
        {!!order.length && (
          <StyledButton variant="blue" type="button">
            Рассчитать
          </StyledButton>
        )}
      </ButtonsWrapper>
      {!!order.length && (
        <>
          <StyledP>
            Стоимость доставки: <span>{deliveryCost}&nbsp;руб.</span>
          </StyledP>
          <StyledP>
            Таможенные платежи: <span>{customCost}&nbsp;руб.</span>
          </StyledP>
          <Sum>
            Итого: <span>{deliveryCost + customCost}&nbsp;руб.</span>{' '}
          </Sum>
          <BottomLinksWrapper>
            <StyledSaveLink variant="outline" type="button">
              Сохранить расчёт
              <svg width="27" height="11" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10" stroke="#5daaff" stroke-width="1.5" />
              </svg>
            </StyledSaveLink>
            <StyledLink href="/contact" variant="blue">
              Связаться по доставке
            </StyledLink>
          </BottomLinksWrapper>
        </>
      )}
    </Wrapper>
  );
});

export default Cart;
