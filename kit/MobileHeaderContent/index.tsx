import React, { FC, ReactNode, MouseEventHandler } from 'react';
import BackArrow from '../../public/img/arrow-back.svg';
import { Component, Button } from './style';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  className?: string;
}

const MobileHeaderContent: FC<Props> = ({ children, onClick, className }) => {
  return (
    <Component className={className}>
      <Button type="button" onClick={onClick}>
        <BackArrow width={29} height={20} alt="" />
      </Button>
      {children}
    </Component>
  );
};

export default MobileHeaderContent;
