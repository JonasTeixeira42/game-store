import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { GameCardSliderProps } from '.';

type WrapperProps = Pick<GameCardSliderProps, 'color'>;

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 0.8rem;
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -0.8rem;
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 1.6rem;
      }

      .slick-list {
        margin: 0 -1.6rem;
        padding-bottom: 1.6rem;
      }
    `}

    .slick-prev,
    .slick-next {
      display: block;
      color: ${color!};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -5.6rem;
    }

    .slick-next {
      right: -5.6rem;
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
