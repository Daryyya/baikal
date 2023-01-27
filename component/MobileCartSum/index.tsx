import { observer } from 'mobx-react';
import React from 'react';
import { myOrderFormData } from '../../store/orderFormData';
import { Wrapper, StyledP, DirectionP } from './style';
import CartSum from '../CartSum';
import { myDirectionFormData } from '../../store/directionFormData';

const MobileCartSum = observer(() => {
  const totlaValue = myOrderFormData.getTotalValue();
  const direction = myDirectionFormData.getState();
  const { from, to, currency } = direction;
  const { totalCost, totalGrossWeight, totalNetWeight, totalVolume } = totlaValue;
  return (
    <Wrapper>
      <DirectionP>
        <span>{from}</span>&nbsp;
        <svg width="15" height="6" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10" stroke="#606F7A" stroke-width="1.5" />
        </svg>
        &nbsp;
        <span>{to}</span>,&nbsp;<span>{currency}</span>
      </DirectionP>
      <StyledP>
        <span>Общая масса нетто, кг:</span>
        <span>{totalNetWeight}</span>
      </StyledP>
      <StyledP>
        <span>Общая масса брутто, кг:</span>
        <span>{totalGrossWeight}</span>
      </StyledP>
      <StyledP>
        <span>Общий объем, м3:</span>
        <span>{totalVolume}</span>
      </StyledP>
      <StyledP>
        <span>Общая стоимость:</span>
        <span>{totalCost}&nbsp;руб.</span>
      </StyledP>
      <CartSum />
    </Wrapper>
  );
});

export default MobileCartSum;
