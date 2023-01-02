import React, { FC } from "react";
import { Props as BaseProps } from "react-select";
import { StyledSelect } from "./style";

interface Proprs extends BaseProps {
  hasArrow?: boolean;
}

const Select: FC<Proprs> = ({ hasArrow = true, ...restProps }) => {
  return (
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
  );
};

export default Select;
