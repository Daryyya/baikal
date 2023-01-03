import React, { Children, FormEventHandler } from "react";
import { useRouter } from 'next/router'
import { StyledForm, Input, Button } from "./style";
import Select from "../../kit/Select";
import { currencies } from "./currencies";

const Form = () => {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push('/order')
  }

  
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Select options={currencies} hasArrow={false} topTitle='Откуда'/>
      <Select options={currencies} topTitle='Куда'/>
      <Select options={currencies} topTitle='Валюта'/>
      <Input topTitle="Курс" />
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
            stroke-width="1.5"
          />
        </svg>
      </Button>
    </StyledForm>
  );
};

export default Form;
