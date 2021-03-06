import React from 'react';
import { ArrowBackIos as ArrowLeft } from 'styled-icons/material-outlined/';
import { ArrowForwardIos as ArrowRight } from 'styled-icons/material-outlined/';

import Gamecard, { GameCardProps } from 'components/Gamecard';
import Slider, { SliderSettings } from 'components/Slider';

import * as S from './styles';

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: '#FAFAFA' | '#272727';
};

const settings: SliderSettings = {
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

const GameCardSlider = ({ items, color = '#272727' }: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <Gamecard key={index} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
};

export default GameCardSlider;
