import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { StyledLinkOrButtonProps } from '../buttonAndLinkCommonStyle';
import { StyledLink } from './style';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant: StyledLinkOrButtonProps['variant'];
  children: ReactNode;
}

const Link: FC<Props> = ({ children, ...restProps }) => {
  return (
    <StyledLink {...restProps}>
      {children}
    </StyledLink>
  );
};

export default Link;
