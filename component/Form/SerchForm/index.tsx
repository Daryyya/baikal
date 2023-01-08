import React, {FC} from 'react'
import Input from '../../../kit/Input';
import { StyledForm, StyledButton } from './style';
import {useForm, SubmitHandler} from 'react-hook-form';

interface Fields {
  name: string,
}

interface Props {
  setSearchValue: (newValue: string) => void;
}

const SerchForm: FC<Props> = ({setSearchValue}) => {

  const {handleSubmit, register} = useForm<Fields>()

  const onSubmit: SubmitHandler<Fields> = (data) => {
    setSearchValue(data.name)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <Input {...register('name')}/>
      <StyledButton variant='blue' type='submit'>Поиск</StyledButton>
    </StyledForm>
  )
}

export default SerchForm