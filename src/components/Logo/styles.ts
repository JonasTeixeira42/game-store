import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from '.';

export const Wrapper = styled.div<LogoProps>`
  ${({ color, hideOnMobile }) => css`
    width: 11rem;
    height: 3.3.rem;
    color: ${color};

    ${hideOnMobile &&
    css`
      ${media.lessThan('medium')`
        width: 5.8rem;
        height: 4.5rem;

        svg {
          height: 4.5rem;
          pointer-event: none;
        }

        .text {
          display: none;
        }
      `}
    `}
  `}
`;
