import React, { FC, InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormFields } from '../types';
import { StyledInput } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  fKey: 'volume' | 'netWeight' | 'grossWeight' | 'cost';
  register: UseFormRegister<FormFields>;
  err?: FieldError;
}

const NumberInput: FC<Props> = ({ register, err, fKey, ...restProps }) => {
  return (
    <StyledInput
      withRedOutline={!!err}
      {...restProps}
      {...register(fKey, {
        required: true,
        valueAsNumber: true,
        validate: (value) => !Number.isNaN(value) && (value || 0) > 0,
      })}
    />
  );
};

export default NumberInput;
