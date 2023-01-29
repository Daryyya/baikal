import React, { FC, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from 'mobx-react';
import Link from 'next/link';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { myOrderFormData, OrderFormFields } from '../../store/orderFormData';
import Input from '../../kit/Input';
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

interface FormFields extends OrderFormFields {
  amount: number;
}

const schema: yup.SchemaOf<FormFields> = yup.object().shape({
  amount: yup.number().required('1'),
  volume: yup.number().positive('looser!').required('2'),
  netWeight: yup.number().test('', 'Введите число', (v) => !!v && !Number.isNaN(v)).required('3'),
  grossWeight: yup.number().required('4'),
  cost: yup.number().required('5'),
});

const OrderForm: FC = observer(() => {
  const order = myOrderFormData.getState();
  const checkedItem = myOrderFormData.getCheckedItem();

  const { handleSubmit, reset, register, setValue, control, formState } = useForm<FormFields>({
    defaultValues: {
      ...checkedItem,
      amount: checkedItem?.amount || 1,
    },
    resolver: yupResolver(schema)
  });

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
    console.log(data);
    
    // if (checkedItem?.key) {
    //   myOrderFormData.editItem({ ...checkedItem, ...data }, checkedItem.key);
    // } else {
    //   myOrderFormData.addItem({ ...checkedItem, ...data }, Date.now());
    // }
    // myOrderFormData.removeCheckedItem();
  };

  console.log(formState.errors);
  

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
            <StyledMinus width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1L15 1" stroke="#5DAAFF" />
            </StyledMinus>
          </button>
          <AmountInput defaultValue="1" {...register('amount', { required: true, min: 1 })} />
          <button onClick={() => setValue('amount', (amount || 0) + 1)} type="button">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 0V15" stroke="#5DAAFF" />
              <path d="M0 7.5L15 7.5" stroke="#5DAAFF" />
            </svg>
          </button>
        </ButtonWrapper>
      </AmountWrapper>
      <Input placeholder="Объём, м3" {...register('volume', { required: true })} />
      <Input placeholder="Общая масса нетто, кг" {...register('netWeight', { required: true })} />
      <Input placeholder="Общая масса брутто, кг" {...register('grossWeight')} />
      <Input placeholder="Стоимость одной единицы" {...register('cost', { required: true })} />
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
