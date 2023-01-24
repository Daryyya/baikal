import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Proprs as SelectProps } from '../../../kit/Select';
import { StyledSelect } from './style';

interface Props extends SelectProps {
  control: any;
  name: string;
  firstChild?: boolean;
  lastChild?: boolean;
}

const ControlledSelect: FC<Props> = ({ control, firstChild, lastChild, ...selectProps }) => {
  return (
    <Controller
      control={control}
      name={selectProps.name}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value, name } }) => (
        <StyledSelect
          {...selectProps}
          firstChild={firstChild}
          lastChild={lastChild}
          value={value}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
        />
      )}
    />
  );
};

export default ControlledSelect;
