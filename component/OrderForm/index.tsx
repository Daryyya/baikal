import React, { FC } from "react";
import { observer } from "mobx-react";
import { StyledForm } from "./style";
import { myOrderFormData } from "../../store/orderFormData";

interface Props {}

const OrderForm: FC<Props> = observer(({}) => {
  const order = myOrderFormData.getState();
  const lastItem = order.at(-1);
  console.log([...order])

  if (!lastItem) {
    return <div>Вы не выбрали пока ни одного элемента.</div>;
  }

  const {id, name, image} = lastItem;

  return (<StyledForm>
    
  </StyledForm>);
});

export default OrderForm;
