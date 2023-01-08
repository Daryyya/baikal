import React from "react";
import { data } from "./data";
import Card from "../Card";
import { Wrapper } from "./style";

const CardList = () => {
  return (
    <Wrapper>
      {data.map((item ) => (
        <Card key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default CardList;
