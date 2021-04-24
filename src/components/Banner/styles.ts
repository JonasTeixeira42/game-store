import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  position: relative;

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`;

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 100%;
    height: 23rem;
    background-color: #f8f8f8;
    background-image: url(${src});
    background-position: center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 58rem;
      border-radius: 0 0 0.4rem 0.4rem;
    `}
  `}
`;

export const Caption = styled.div`
  ${() => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 2.4rem;
    ${media.greaterThan('medium')`
      border-radius: 0 0 0.4rem 0.4rem;
      padding: 4rem;
      position: absolute;
      bottom: 0;
      left: 0;
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
  color: #fafafa;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 1.6rem;

  strong {
    color: #f231a5;
    font-weight: 600;
  }

  ${media.greaterThan('medium')`
    font-size: 1.8rem;
  `}
`;
