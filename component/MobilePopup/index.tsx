import React, { FC, ReactNode } from 'react';
import { Popup } from './style';

interface Props {
  children: ReactNode;
}

const MobilePopup: FC<Props> = ({ children }) => {
  return <Popup>{children}</Popup>;
};

export default MobilePopup;
