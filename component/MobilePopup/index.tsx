import React, { FC, ReactNode } from 'react';
import { Popup } from './style';

interface Props {
  children: ReactNode;
  className?: string;
}

const MobilePopup: FC<Props> = ({ children, className }) => {
  return <Popup className={className}>{children}</Popup>;
};

export default MobilePopup;
