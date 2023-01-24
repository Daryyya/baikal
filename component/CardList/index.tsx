import React, { FC } from 'react';
import { data } from './data';
import Card from '../Card';
import { Wrapper } from './style';

interface Props {
  searchValue: string;
}

const CardList: FC<Props> = ({ searchValue }) => {
  const newArr = data.filter((el) => el.name.toLowerCase().includes(searchValue.trim().toLowerCase()));
  return (
    <Wrapper>
      {newArr.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default CardList;
