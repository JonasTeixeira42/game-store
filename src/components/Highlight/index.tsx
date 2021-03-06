import React from 'react';

import Button from 'components/Button';

import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  backgroundImage: string;
  floatImage: string;
};

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  backgroundImage,
  floatImage,
}: HighlightProps) => {
  return (
    <S.Wrapper backgroundImage={backgroundImage}>
      {!!floatImage && <S.FloatImage src={floatImage} />}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button>{buttonLabel}</Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default Highlight;
