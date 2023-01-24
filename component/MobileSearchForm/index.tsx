import React, { FC } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import backArrow from '../../public/img/arrow-back.svg';
import { Form, StyledInput, BackButton } from './style';

interface Fields {
  search: string;
}

interface Props {
  setSearchValue: (newValue: string) => void;
}

const MobileSearchForm: FC<Props> = ({ setSearchValue }) => {
  const router = useRouter();
  const { handleSubmit, register } = useForm<Fields>();

  const onEvent: SubmitHandler<Fields> = (data) => {
    setSearchValue(data.search);
  };

  return (
    <Form onChange={handleSubmit(onEvent)} onSubmit={handleSubmit(onEvent)}>
      <BackButton type="button" onClick={router.back}>
        <Image src={backArrow} width={29} height={20} alt="" />
      </BackButton>
      <StyledInput {...register('search')} placeholder="Поиск" />
    </Form>
  );
};

export default MobileSearchForm;
