import React, { FC } from "react";
import { Controller } from "react-hook-form";
import Select, {Proprs as SelectProps} from "../../../kit/Select";

interface Props extends SelectProps {
  control: any;
  name: string;
}

const ControlledSelect: FC<Props> = ({control, ...selectProps}) => {
  return (
    <Controller
      control={control}
      name={selectProps.name}
      rules={{
        required: true,
      }}
      render={({
        field: { onChange, onBlur, value, name },
      }) => (
        <Select
          {...selectProps}
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
