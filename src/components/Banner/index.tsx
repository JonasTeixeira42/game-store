import React from 'react';

import Button from 'components/Button';

import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
};

const Banner = ({ img, title, subtitle, buttonLabel }: BannerProps) => {
  return (
    <S.Wrapper>
      <S.Image src={img} role="img" />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button size="large">{buttonLabel}</Button>
      </S.Caption>
    </S.Wrapper>
  );
};

export default Banner;
