import { observer } from "mobx-react";
import React, { useState } from "react";
import { myFormData } from "../../store/formData";
import SerchForm from "../../component/Form/SerchForm";
import { Container, RightColumn, LeftColumn, Title } from "./style";
import CardList from "../../component/CardList";

const Order = observer(() => {
  const state = myFormData.getState();
  const [searchValue, setSearchValue] = useState('');
  return (
    <Container>
      <LeftColumn>
        <Title>Выберите мебель, которую нужно перевезти</Title>
        <SerchForm setSearchValue={setSearchValue}/>
        <CardList searchValue={searchValue}/>
      </LeftColumn>
      <RightColumn>
        <Title>Затем заполните следующие поля выбранного элемента:</Title>
      </RightColumn>
    </Container>
  );
});

export default Order;
