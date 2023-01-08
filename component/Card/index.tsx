import React, { FC } from "react";
import { Container, ItemName, StyledImage, StyledButton } from "./style";
import { Item, myOrderFormData } from "../../store/orderFormData";
import { observer } from "mobx-react";

interface Props {
  item: Item;
}

const Card: FC<Props> = observer(({ item }) => {
  const { id, name, image } = item;
  const checkedItem = myOrderFormData.getCheckedItem();
  const isChecked = id === checkedItem?.id ||
    myOrderFormData.getState().some((picked) => picked.id === id);

  const handleClick = () => {
    if (checkedItem?.id === id) {
      myOrderFormData.setCheckedItem(undefined);
    } else {
      console.log(item);
      myOrderFormData.setCheckedItem(item);
    }
  };

  return (
    <Container>
      <StyledImage src={image} alt="item" width={120} height={97} />
      {id}
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
