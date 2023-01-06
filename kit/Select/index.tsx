import React, { FC } from "react";
import { Props as BaseProps } from "react-select";
import { StyledSelect, Label, Wrapper } from "./style";

interface Option {
  label: string;
  value: string;
}

export interface Proprs extends BaseProps {
  options: Option[]
  hasArrow?: boolean;
  topTitle?: string;
}

const Select: FC<Proprs> = ({ hasArrow = true, topTitle, value, onChange, ...restProps }) => {
  return (
    <Wrapper>
      {topTitle && <Label>{topTitle}</Label>}
      <StyledSelect
        {...restProps}
        value={{ label: value, value }}
        onChange={(option, meta) => {
          if (onChange) {
            onChange((option as any)?.value, meta)
          }
        }}
        classNamePrefix="react-select"
        placeholder=""
        components={
          hasArrow
            ? {
                IndicatorSeparator: () => null,
              }
            : {
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }
        }
      />
    </Wrapper>
  );
};

export default Select;
