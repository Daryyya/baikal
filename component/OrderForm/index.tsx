import React, { FC, useEffect } from "react";
import { observer } from "mobx-react";
import {
  StyledForm,
  ItemWrapper,
  StyledImage,
  ItemName,
  ButtonWrapper as ButtonWrapper,
  AmountInput,
  StyledMinus,
  AmountWrapper,
  StyledText,
  Buttons,
  StyledButton,
  CartLinkText,
} from "./style";
import { Item, myOrderFormData } from "../../store/orderFormData";
import Input from "../../kit/Input";
import Link from "next/link";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";

const OrderForm: FC = observer(({}) => {
  const order = myOrderFormData.getState();
  const checkedItem = myOrderFormData.getCheckedItem();

  const { handleSubmit, reset, register, setValue, control, formState } = useForm<Item>({
    defaultValues: {
      ...checkedItem,
      amount: "1",
    },
  });
  
  useEffect(reset, [checkedItem]);
  const { amount } = useWatch({ control });

  const onSubmit: SubmitHandler<Item> = (data) => {
    if (checkedItem?.key) {
      myOrderFormData.editItem({...checkedItem, ...data}, checkedItem.key);
    } else {
      myOrderFormData.addItem({...checkedItem, ...data}, Date.now());
    }
    myOrderFormData.setCheckedItem(undefined);
  };

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
          <button
            onClick={() => setValue("amount", `${Number(amount) - 1}`)}
            type="button"
            disabled={amount === '1'}
          >
            <StyledMinus
              width="15"
              height="2"
              viewBox="0 0 15 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1L15 1" stroke="#5DAAFF" />
            </StyledMinus>
          </button>
          <AmountInput defaultValue="1" {...register("amount", { required: true, min: 1 })} />
          <button
            onClick={() => setValue("amount", `${Number(amount) + 1}`)}
            type="button"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.5 0V15" stroke="#5DAAFF" />
              <path d="M0 7.5L15 7.5" stroke="#5DAAFF" />
            </svg>
          </button>
        </ButtonWrapper>
      </AmountWrapper>
      <Input placeholder="Объём, м3" {...register("volume", { required: true })} />
      <Input placeholder="Общая масса нетто, кг" {...register("netWeight", { required: true })} />
      <Input
        placeholder="Общая масса брутто, кг"
        {...register("grossWeight")}
      />
      <Input placeholder="Стоимость одной единицы" {...register("cost", { required: true })} />
      <Buttons>
        <StyledButton type="reset" variant="blue" onClick={() => reset()}>
          Сбросить
        </StyledButton>
        <StyledButton type="submit" variant="blue" disabled={!formState.isValid}>
          {checkedItem.key ? 'Изменить' : 'Добавить'}
        </StyledButton>
      </Buttons>
    </StyledForm>
  );
});

export default OrderForm;
