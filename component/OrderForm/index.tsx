import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import PlusIcon from '../../public/img/plus.svg';
import { myOrderFormData } from '../../store/orderFormData';
import NumberInput from './NumberInput';
import { FormFields } from './types';
import {
  StyledForm,
  ItemWrapper,
  StyledImage,
  ItemName,
  ButtonWrapper,
  AmountInput,
  StyledMinus,
  AmountWrapper,
  StyledText,
  Buttons,
  StyledButton,
  CartLinkText,
} from './style';

const OrderForm: FC = observer(() => {
  const order = myOrderFormData.getState();
  const checkedItem = myOrderFormData.getCheckedItem();

  const { handleSubmit, reset, register, setValue, control, formState } = useForm<FormFields>({
    defaultValues: {
      ...checkedItem,
      amount: checkedItem?.amount || 1,
    },
  });
  const { volume: volumeErr, cost: costErr, grossWeight: gwErr, netWeight: nwErr } = formState.errors;

  useEffect(reset, [checkedItem]);
  const { amount } = useWatch({ control });

  if (order.length === 0 && !checkedItem) {
    return <div>Вы не выбрали пока ни одного элемента.</div>;
  }

  if (!checkedItem) {
    return (
      <CartLinkText>
        Выберите новый товар или перейдите в&nbsp;
        <Link href="/cart">корзину ({order.length})</Link>
      </CartLinkText>
    );
  }

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    if (checkedItem?.key) {
      myOrderFormData.editItem({ ...checkedItem, ...data }, checkedItem.key);
    } else {
      myOrderFormData.addItem({ ...checkedItem, ...data }, Date.now());
    }
    myOrderFormData.removeCheckedItem();
  };

  const { name, image } = checkedItem;
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ItemWrapper>
        <StyledImage src={image} alt="item" width={108} height={70} />
        <ItemName>{name}</ItemName>
      </ItemWrapper>
      <AmountWrapper>
        <StyledText>Кол-во:</StyledText>
        <ButtonWrapper>
          <button onClick={() => setValue('amount', (amount || 0) - 1)} type="button" disabled={amount === 1}>
            <StyledMinus />
          </button>
          <AmountInput defaultValue={1} {...register('amount', { required: true, min: 1, valueAsNumber: true })} />
          <button onClick={() => setValue('amount', (amount || 0) + 1)} type="button">
            <PlusIcon />
          </button>
        </ButtonWrapper>
      </AmountWrapper>
      <NumberInput placeholder="Объём, м3" register={register} fKey="volume" err={volumeErr} />
      <NumberInput placeholder="Общая масса нетто, кг" register={register} fKey="netWeight" err={nwErr} />
      <NumberInput placeholder="Общая масса брутто, кг" register={register} fKey="grossWeight" err={gwErr} />
      <NumberInput placeholder="Стоимость одной единицы" register={register} fKey="cost" err={costErr} />
      <Buttons>
        <StyledButton type="reset" variant="blue" onClick={() => reset()}>
          Сбросить
        </StyledButton>
        <StyledButton type="submit" variant="blue">
          {checkedItem.key ? 'Изменить' : 'Добавить'}
        </StyledButton>
      </Buttons>
    </StyledForm>
  );
});

export default OrderForm;
