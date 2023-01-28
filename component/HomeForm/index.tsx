import React from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { observer } from 'mobx-react';
import {
  StyledForm,
  StyledButton,
  StyledTooltipOne,
  StyledSvgOne,
  StyledTooltipTwo,
  StyledSvgTwo,
  DesktopButtonContent,
  MobileButtonContent,
} from './style';
import ControlledInput from './ControlledInput';
import ControlledSelect from './ControlledSelect';
import { currencies } from './currencies';
import { chineseCities } from './chineseCities';
import { Fields, myDirectionFormData } from '../../store/directionFormData';
import { russianCities } from './russianCities';

const HomeForm = observer(() => {
  const router = useRouter();
  const defaultValues = myDirectionFormData.getState();
  const { register, handleSubmit, control, setValue, formState } = useForm<Fields>({
    defaultValues,
    mode: 'all',
  });
  const { currency } = useWatch({ control });

  const { isDirty, errors } = formState;

  const onSubmit: SubmitHandler<Fields> = (data) => {
    myDirectionFormData.setState(data);
    router.push('/order');
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ControlledSelect
        control={control}
        options={chineseCities}
        hasArrow={false}
        topTitle="Откуда"
        name="from"
        firstChild
      />
      <ControlledSelect control={control} options={russianCities} topTitle="Куда" name="to" />
      <ControlledSelect control={control} options={currencies} topTitle="Валюта" name="currency" lastChild />
      <ControlledInput register={register} selectValue={currency || ''} onUpdate={(rate) => setValue('rate', rate)} />
      <StyledButton variant="blue" type="submit">
        <DesktopButtonContent>
          Далее &nbsp;
          <svg width="27" height="11" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10" stroke="white" strokeWidth="1.5" />
          </svg>
        </DesktopButtonContent>
        <MobileButtonContent>Выбрать мебель</MobileButtonContent>
      </StyledButton>
      {errors.from && (
        <StyledTooltipOne>
          Для начала заполните поля выше
          <StyledSvgOne width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2V22" stroke="#5DAAFF" strokeWidth="1.5" />
            <path d="M11 7L6 2L1 7" stroke="#5DAAFF" strokeWidth="1.5" />
          </StyledSvgOne>
        </StyledTooltipOne>
      )}
      {isDirty && Object.values(errors).length === 0 && (
        <StyledTooltipTwo>
          Теперь нажмите на кнопку “Далее”
          <StyledSvgTwo width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2V22" stroke="#5DAAFF" strokeWidth="1.5" />
            <path d="M11 7L6 2L1 7" stroke="#5DAAFF" strokeWidth="1.5" />
          </StyledSvgTwo>
        </StyledTooltipTwo>
      )}
    </StyledForm>
  );
});

export default HomeForm;
