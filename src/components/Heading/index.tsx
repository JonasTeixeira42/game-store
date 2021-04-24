import React from 'react';

import * as S from './styles';

export type LineColors = '#3CD3C1' | '#F231A5';

export type HeadingProps = {
  children: React.ReactNode;
  color?: '#FAFAFA' | '#272727';
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
};

const Heading = ({
  children,
  color = '#272727',
  lineLeft = false,
  lineColor = '#3CD3C1',
  lineBottom = false,
}: HeadingProps) => {
  return (
    <S.Wrapper
      lineBottom={lineBottom}
      lineColor={lineColor}
      color={color}
      lineLeft={lineLeft}
    >
      {children}
    </S.Wrapper>
  );
};

export default Heading;
