import React from "react";
import { useRouter } from 'next/router'
import { StyledForm, Button } from "./style";
import ControlledSelect from "./ControlledSelect";
import { currencies } from "./currencies";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import ControlledInput from "./ControlledInput";

interface Fields {
  from: string;
  to: string;
  currency: string;
  rate: number;
}

const Form = () => {

  const router = useRouter()

  const {register, handleSubmit, control, setValue} = useForm<Fields>({
    defaultValues: {
      from: '',
      to: 'Москва',
      currency: 'USD',
      rate: 0,
    }
  })
  const {currency} = useWatch({control})

  const onSubmit: SubmitHandler<Fields> = (data) => {
    // console.log(data)
    // router.push('/order')
  }

  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ControlledSelect control={control} options={currencies} hasArrow={false} topTitle='Откуда' name='from'/>
      <ControlledSelect control={control} options={currencies} topTitle='Куда' name='to'/>
      <ControlledSelect control={control} options={currencies} topTitle='Валюта' name='currency'/>
      <ControlledInput register={register} selectValue={currency || ''} onUpdate={(rate) => setValue('rate', rate)}/>
      <Button variant="blue" type='submit' >
        Далее
        <svg
          width="27"
          height="11"
          viewBox="0 0 27 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </Button>
    </StyledForm>
  );
};

export default Form;
