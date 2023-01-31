import { observer } from 'mobx-react';
import React from 'react';
import { myOrderFormData } from '../../store/orderFormData';
import CartSum from '../CartSum';
import ArrowIcon from '../../public/img/arrow.svg';
import { myDirectionFormData } from '../../store/directionFormData';
import { Wrapper, StyledP, DirectionP } from './style';

const MobileCartSum = observer(() => {
  const totlaValue = myOrderFormData.getTotalValue();
  const direction = myDirectionFormData.getState();
  const { from, to, currency } = direction;
  const { totalCost, totalGrossWeight, totalNetWeight, totalVolume } = totlaValue;
  return (
    <Wrapper>
      {from && to && (
        <DirectionP>
          <span>{from}</span>&nbsp;
          <ArrowIcon width="15" height="6" viewBox="0 0 27 11" />
          &nbsp;
          <span>{to}</span>,&nbsp;<span>{currency}</span>
        </DirectionP>
      )}
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
