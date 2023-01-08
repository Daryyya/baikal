import React, { FC } from "react";
import { Container, ItemName, StyledImage } from "./style";
import { StaticImageData } from "next/image";
import Button from "../../kit/Button";
import {Item} from '../CardList/data'

interface Props {
  item: Item;
}

const Card: FC<Props> = ({ item}) => {
  const {id, name, image} = item;
  return (
    <Container>
      <StyledImage src={image} alt="item" width={120} height={97} />
      <ItemName>{name}</ItemName>
      <Button variant="blue" type="button">Выбрать</Button>
    </Container>
  );
};

export default Card;
