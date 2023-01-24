import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Item, myOrderFormData } from '../../../store/orderFormData';
import { Wrapper, StyledP, CardWrap, StyledImage } from './style';
import editIcon from '../../../public/img/edit-btn.png';
import deleteIcon from '../../../public/img/delete-btn.png';

interface Props {
  item: Item;
}

const Card: FC<Props> = observer(({ item }) => {
  const { image, name, amount, cost, grossWeight, netWeight, volume } = item;
  const router = useRouter();

  const handleEditClick = () => {
    myOrderFormData.setCheckedItem(item);
    router.push('/order');
  };
  return (
    <Wrapper>
      <CardWrap>
        <StyledImage src={image} alt="изображение" width={108} height={58} />
        {name}
        <button type="button" onClick={handleEditClick}>
          <Image src={editIcon} alt="редактировать" width={25} height={25} />
        </button>
        <button type="button" onClick={() => myOrderFormData.removeItem(item)}>
          <Image src={deleteIcon} alt="удалить" width={25} height={25} />
        </button>
      </CardWrap>
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
        <span>{cost} руб.</span>
      </StyledP>
    </Wrapper>
  );
});

export default Card;
