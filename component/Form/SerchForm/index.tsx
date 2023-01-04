import React from 'react'
import Button from '../../../kit/Button';
import Input from '../../../kit/Input';
import { StyledForm, StyledButton } from './style';

const SerchForm = () => {
  return (
    <StyledForm>
      <Input/>
      <StyledButton variant='blue'>Поиск</StyledButton>
    </StyledForm>
  )
}

export default SerchForm