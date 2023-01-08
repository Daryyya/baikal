import React, { FC } from "react";
import { Container, ItemName, StyledImage, StyledButton } from "./style";
import { Item, myOrderFormData } from "../../store/orderFormData";
import { observer } from "mobx-react";

interface Props {
  item: Item;
}

const Card: FC<Props> = observer(({ item }) => {
  const { id, name, image } = item;

  const isChecked = myOrderFormData.getState().some((item) => item.id === id);

  const handleClick = () => {
    if (isChecked) {
      myOrderFormData.removeItem(item);
    } else {
      myOrderFormData.addItem(item);
    }
  };
  return (
    <Container>
      <StyledImage src={image} alt="item" width={120} height={97} />
      <ItemName>{name}</ItemName>
      <StyledButton
        variant={isChecked? 'white' : 'blue'}
        type="button"
        onClick={handleClick}
      >
        {isChecked ? "Выбрано" : "Выбрать"}
      </StyledButton>
    </Container>
  );
});

export default Card;
