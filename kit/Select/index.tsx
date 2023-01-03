import React, { FC } from "react";
import { Props as BaseProps } from "react-select";
import { StyledSelect, Label, Wrapper } from "./style";

interface Proprs extends BaseProps {
  hasArrow?: boolean;
  topTitle?: string;
}

const Select: FC<Proprs> = ({ hasArrow = true, topTitle, ...restProps }) => {
  return (
    <Wrapper>
      {topTitle && <Label>{topTitle}</Label>}
      <StyledSelect
        {...restProps}
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
