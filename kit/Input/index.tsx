import React, { FC, forwardRef, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { StyledInput, Label } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  topTitle?: string;
  wrapperProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ wrapperProps, topTitle, ...restProps }, ref) => {
  return (
    <Label {...wrapperProps}>
      {topTitle}
      <StyledInput {...restProps} ref={ref} />
    </Label>
  );
});

export default Input;
