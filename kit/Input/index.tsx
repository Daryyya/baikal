import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react'
import { StyledInput, Label } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  topTitle?: string;
  wrapperProps?:  LabelHTMLAttributes<HTMLLabelElement>;
}

const Input: FC<Props> = ({wrapperProps, topTitle, ...restProps}) => {
  return (
    <Label {...wrapperProps}>
      {topTitle}
      <StyledInput {...restProps}/>
    </Label>
    
  )
}

export default Input