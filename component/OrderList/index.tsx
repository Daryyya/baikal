import { observer } from 'mobx-react';
import React from 'react';
import { myOrderFormData } from '../../store/orderFormData';
import Card from './Card';
import { Wrapper } from './style';

const OrderList = observer(() => {
  const items = myOrderFormData.getState();
  return (
    <Wrapper>
      {items.map((item) => (
        <Card key={item.key || item.id} item={item} />
      ))}
    </Wrapper>
  );
});

export default OrderList;
