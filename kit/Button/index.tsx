import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { StyledLinkOrButtonProps } from "../buttonAndLinkCommonStyle";
import { StyledButton } from "./style";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: StyledLinkOrButtonProps["variant"];
  children: ReactNode;
}

const Button: FC<Props> = ({ variant, children, ...restProps}) => {
  return (
    <StyledButton {...restProps} variant={variant} type='submit'>
        {children}
    </StyledButton>
  );
};

export default Button;