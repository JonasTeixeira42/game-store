import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as BannerStyles from 'components/Banner/styles';

export const Wrapper = styled.section`
  ${() => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: 2.4rem;

      li {
        background: #fafafa;
        width: 1.2rem;
        height: 1.2rem;
        /* border-radius: 50%; */
        transform: rotate(45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.8rem;
        cursor: pointer;

        &.slick-active {
          background: #31beaf;
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        top: 0;
        flex-direction: column;
        height: 100%;
        margin: 0;

        li {
          margin: 0.8rem 0;
        }
      }
    `}
  `}
`;
