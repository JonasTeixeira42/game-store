import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundImage }) => css`
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    height: 23rem;
    display: grid;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`;

export const FloatImage = styled.img`
  grid-area: floatimage;
  z-index: 10;
  max-height: 23rem;
  max-width: 100%;
  align-self: end;

  ${media.greaterThan('medium')`
    max-height: 32rem;
  `}
`;

export const Content = styled.div`
  ${() => css`
    grid-area: content;
    z-index: 10;
    text-align: right;
    padding: 1.6rem;

    ${media.greaterThan('medium')`
      align-self: end;
      padding: 4rem;
    `}
  `}
`;

export const Title = styled.h2`
  ${() => css`
    font-size: 1.8rem;
    font-weight: 600;
    color: #fafafa;

    ${media.greaterThan('medium')`
      font-size: 2.8rem;
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${() => css`
    color: #fafafa;
    font-weight: 300;
    font-size: 1.4rem;
    margin-bottom: 3.2rem;

    ${media.greaterThan('medium')`
      font-size: 1.8rem;
    `}
  `}
`;
