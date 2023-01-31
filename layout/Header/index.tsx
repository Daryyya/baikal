import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import ArrowIcon from '../../public/img/arrow.svg';
import logo from '../../public/img/logo.png';
import MenuIcon from '../../public/img/menu.svg';
import CloseIcon from '../../public/img/close.svg';
import { myDirectionFormData } from '../../store/directionFormData';
import { StyledHeader, Container, DesktopStyledLink, BurgerMenu, StyledP } from './style';

const Header = observer(() => {
  const { route } = useRouter();
  const direction = myDirectionFormData.getState();
  const { currency, from, to } = direction;

  return (
    <StyledHeader>
      <Container>
        <NextLink href="/">
          <Image src={logo} alt="logo" width={163} height={40} />
        </NextLink>
        {from && to && route !== '/' && route !== '/contact' && (
          <StyledP>
            <span>{from}</span>
            &nbsp;
            <ArrowIcon width="15" height="6" viewBox="0 0 27 11" />
            &nbsp;
            <span>{to}</span>, &nbsp;
            <span>{currency}</span>
          </StyledP>
        )}
        <DesktopStyledLink href={route === '/contact' ? '/' : '/contact'} variant="white">
          {route === '/contact' ? 'На главную' : 'Связаться'}
        </DesktopStyledLink>
        <BurgerMenu href={route === '/contact' ? '/' : '/contact'}>
          {route === '/contact' ? (
            <CloseIcon width={22} height={22} alt="" />
          ) : (
            <MenuIcon width={22} height={22} alt="" />
          )}
        </BurgerMenu>
      </Container>
    </StyledHeader>
  );
});

export default Header;
