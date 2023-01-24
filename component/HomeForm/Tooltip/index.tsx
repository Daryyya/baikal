import React, { FC, ReactNode } from 'react';
import { Wrapper } from './style';
interface Props {
  children: ReactNode;
  className?: string;
}

const Tooltip: FC<Props> = ({ children, ...restProp }) => {
  const { className } = restProp;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Tooltip;
