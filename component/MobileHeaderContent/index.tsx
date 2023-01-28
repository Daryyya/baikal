import React, { FC, ReactNode, MouseEventHandler } from 'react';
import Image from 'next/image';
import backArrow from '../../public/img/arrow-back.svg';
import { Component, Button } from './style';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const MobileHeaderContent: FC<Props> = ({ children, onClick }) => {
  return (
    <Component>
      <Button type="button" onClick={onClick}>
        <Image src={backArrow} width={29} height={20} alt="" />
      </Button>
      {children}
    </Component>
  );
};

export default MobileHeaderContent;
