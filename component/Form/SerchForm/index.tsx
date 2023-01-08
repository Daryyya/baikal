import React from 'react'
import Input from '../../../kit/Input';
import { StyledForm, StyledButton } from './style';

const SerchForm = () => {
  return (
    <StyledForm>
      <Input/>
      <StyledButton variant='blue' type='submit'>Поиск</StyledButton>
    </StyledForm>
  )
}

export default SerchForm