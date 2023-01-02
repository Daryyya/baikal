import React, { FC, ReactNode } from "react";
import { StyledLinkOrButtonProps } from "../buttonAndLinkCommonStyle";
import { StyledLink } from "./style";

interface Props {
  page: string;
  variant: StyledLinkOrButtonProps["variant"];
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
