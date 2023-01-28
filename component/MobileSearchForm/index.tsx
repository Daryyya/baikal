import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form, StyledInput } from './style';

interface Fields {
  search: string;
}

interface Props {
  setSearchValue: (newValue: string) => void;
}

const MobileSearchForm: FC<Props> = ({ setSearchValue }) => {
  const { handleSubmit, register } = useForm<Fields>();

  const onEvent: SubmitHandler<Fields> = (data) => {
    setSearchValue(data.search);
  };

  return (
    <Form onChange={handleSubmit(onEvent)} onSubmit={handleSubmit(onEvent)}>
      <StyledInput {...register('search')} placeholder="Поиск" />
    </Form>
  );
};

export default MobileSearchForm;
