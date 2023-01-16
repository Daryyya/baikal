import Image from "next/image";
import React, { FC } from "react";
import { Item } from "../../../store/orderFormData";
import { Wrapper, Info, StyledP } from "./style";

interface Props {
  item: Item;
}

const Card: FC<Props> = ({ item }) => {
  const { image, name, amount, cost, grossWeight, netWeight, volume } =
    item;
  return (
    <Wrapper>
      <Image src={image} alt="изображение" width={108} height={58} />
      {name}
      <Info>
      <StyledP>  
        Кол-во: 
        <span>{amount}</span>
      </StyledP>
      <StyledP>
        Общая масса нетто, кг:
        <span>{netWeight}</span>
      </StyledP>
      <StyledP>
        Общая масса брутто, кг:
        <span>{grossWeight}</span>
      </StyledP>
      <StyledP>
        Общий объем, м3:
        <span>{volume}</span>
      </StyledP>
      <StyledP>
        Стоимость единицы:
        {cost}
      </StyledP>
      </Info>
    </Wrapper>
  );
};

export default Card;
