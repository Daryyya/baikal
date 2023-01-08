import { observer } from "mobx-react";
import React from "react";
import { myFormData } from "../../store/formData";
import SerchForm from "../../component/Form/SerchForm";
import { Container, RightColumn, LeftColumn, Title } from "./style";

const Order = observer(() => {
  const state = myFormData.getState();
  return (
    <Container>
      <LeftColumn>
        <Title>Выберите мебель, которую нужно перевезти</Title>
        <SerchForm/>
        <div>{JSON.stringify(state, null, 2)}</div>
      </LeftColumn>
      <RightColumn>
        <Title>Затем заполните следующие поля выбранного элемента:</Title>
      </RightColumn>
    </Container>
  );
});

export default Order;
