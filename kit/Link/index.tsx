import React, { FC, HTMLAttributes, ReactNode } from "react";
import { StyledLinkOrButtonProps } from "../buttonAndLinkCommonStyle";
import { StyledLink } from "./style";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  page: string;
  variant: StyledLinkOrButtonProps["variant"];
  children: ReactNode;
}

const Link: FC<Props> = ({ page, variant, children, ...restProps}) => {
  return (
    <>
      <StyledLink variant={variant} href={page} {...restProps}>
        {children}
      </StyledLink>
    </>
  );
};

export default Link;
