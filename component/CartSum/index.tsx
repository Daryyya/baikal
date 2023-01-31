import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { HTMLAttributes, FC } from 'react';
import { myOrderFormData } from '../../store/orderFormData';
import { StyledP, BottomLinksWrapper, StyledSaveLink, Sum, StyledContactButton } from './style';
import Arrow from '../../public/img/arrow.svg';

const CartSum: FC<HTMLAttributes<HTMLDivElement>> = observer((props) => {
  const { push } = useRouter();
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
          <Arrow />
        </StyledSaveLink>
        <StyledContactButton
          type="button"
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
