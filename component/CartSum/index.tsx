import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { HTMLAttributes, FC } from 'react';
import { myOrderFormData } from '../../store/orderFormData';
import { StyledP, BottomLinksWrapper, StyledSaveLink, Sum, StyledContactButton } from './style';

const CartSum: FC<HTMLAttributes<HTMLDivElement>> = observer((props) => {
  const { push } = useRouter()
  const totalValue = myOrderFormData.getTotalValue();
  const deliveryCost = totalValue.totalVolume * 300;
  const customCost = totalValue.totalGrossWeight * 2.5;
  return (
    <div {...props}>
      <StyledP>
        <span>Стоимость доставки:</span>
        <span>{deliveryCost}&nbsp;руб.</span>
      </StyledP>
      <StyledP>
        <span>Таможенные платежи:</span>
        <span>{customCost}&nbsp;руб.</span>
      </StyledP>
      <Sum>
        <span>Итого:</span>
        <span>{deliveryCost + customCost}&nbsp;руб.</span>{' '}
      </Sum>
      <BottomLinksWrapper>
        <StyledSaveLink variant="outline" type="button">
          Сохранить расчёт
          <svg width="27" height="11" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10" stroke="#5daaff" strokeWidth="1.5" />
          </svg>
        </StyledSaveLink>
        <StyledContactButton
          type='button'
          variant="blue"
          onClick={() => {
            myOrderFormData.setIsContactFormOpen(true);
            push('/contact');
          }}
        >
          Связаться по доставке
        </StyledContactButton>
      </BottomLinksWrapper>
    </div>
  );
});

export default CartSum;
