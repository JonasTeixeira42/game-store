import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps, LineColors } from '.';

const wrapperModifiers = {
  small: () => css`
    font-size: 1.6rem;

    &::after {
      width: 3rem;
    }
  `,

  medium: () => css`
    font-size: 2.4rem;

    ${media.greaterThan('medium')`
      font-size: 2.8rem;
    `}
  `,

  lineLeft: (color: LineColors) => css`
    padding-left: 0.8rem;
    border-left: 0.7rem solid ${color};
  `,

  lineBottom: (color: LineColors) => css`
    position: relative;
    margin-bottom: 3.2rem;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${color};
    }
  `,
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ color, lineLeft, lineColor, lineBottom, size }) => css`
    color: ${color};

    ${lineLeft && wrapperModifiers.lineLeft(lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(lineColor!)}
    ${!!size && wrapperModifiers[size]()}
  `}
`;
