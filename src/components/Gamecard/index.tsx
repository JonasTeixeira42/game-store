import React, { useState } from 'react';
import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite,
} from '@styled-icons/material-outlined';

import Button from 'components/Button';

import * as S from './styles';

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
};

const Gamecard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
}: GameCardProps) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <S.Wrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton onClick={() => setIsFav(!isFav)}>
          {isFav ? <Favorite /> : <FavoriteBorder />}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size="normal" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default Gamecard;
