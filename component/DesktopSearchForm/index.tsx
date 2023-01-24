import React, { FC } from 'react';
import { StyledForm, StyledInput, StyledButton } from './style';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Fields {
  name: string;
}

interface Props {
  setSearchValue: (newValue: string) => void;
}

const DesktopSerchForm: FC<Props> = ({ setSearchValue }) => {
  const { handleSubmit, register } = useForm<Fields>();

  const onSubmit: SubmitHandler<Fields> = (data) => {
    setSearchValue(data.name);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput {...register('name')} placeholder="Введите название" />
      <StyledButton variant="blue" type="submit">
        Поиск
      </StyledButton>
    </StyledForm>
  );
};

export default DesktopSerchForm;
