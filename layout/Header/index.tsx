import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import logo from '../../public/img/logo.png';
import menu from '../../public/img/menu.svg';
import close from '../../public/img/close.svg';
import { myDirectionFormData } from '../../store/directionFormData';
import { StyledHeader, Container, DesktopStyledLink, BurgerMenu, StyledP } from './style';

const Header = observer(() => {
  const {route} = useRouter();
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
            <svg width="15" height="6" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.5H25M25 5.5L20.5 1M25 5.5L20.5 10" stroke="#606F7A" stroke-width="1.5" />
            </svg>
            &nbsp;
            <span>{to}</span>,
            &nbsp;
            <span>{currency}</span>
          </StyledP>
        )}
        <DesktopStyledLink href={route === '/contact' ? '/' : '/contact'} variant="white">
          {route === '/contact' ? 'На главную' : 'Связаться'}
        </DesktopStyledLink>
        <BurgerMenu href={route === '/contact' ? '/' : '/contact'}>
          <Image src={route === '/contact' ? close : menu} width={22} height={22} alt="" />
        </BurgerMenu>
      </Container>
    </StyledHeader>
  );
});

export default Header;
