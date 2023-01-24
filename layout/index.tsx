import React, { FC, ReactNode } from 'react';
import Header from './Header';
import { Main } from './styles';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
