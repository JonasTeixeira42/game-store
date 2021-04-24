import React, { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/';
import { Search as SearchIcon } from '@styled-icons/material-outlined/';
import { Close as CloseIcon } from '@styled-icons/material-outlined/';

import Logo from 'components/Logo';

import * as S from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.IconWrapper hideOnMobile onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.MenuNav hideOnMobile>
        <S.MenuLink href="">Home</S.MenuLink>
        <S.MenuLink href="">Explorer</S.MenuLink>
      </S.MenuNav>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="">Home</S.MenuLink>
          <S.MenuLink href="">Explorer</S.MenuLink>
          <S.MenuLink href="">My account</S.MenuLink>
          <S.MenuLink href="">Wishlist</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
