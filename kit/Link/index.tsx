import React, { FC, ReactNode } from "react";
import { StyledLink, StyledLinkProps } from "./style";

interface Props {
  page: string;
  variant: StyledLinkProps["variant"];
  children: ReactNode;
}

const Link: FC<Props> = ({ page, variant, children}) => {
  return (
    <>
      <StyledLink variant={variant} href={page}>{children}</StyledLink>
    </>
  );
};

export default Link;
