import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as GameCardSliderStyles from 'components/GameCardSlider/styles';
import * as HighlightStyles from 'components/Highlight/styles';

const Sections = styled.section`
  ${() => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: 3.2rem;
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: 1.6rem;
        margin-left: 1.6rem;
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: -1.6rem;
      `}
    }

    margin-bottom: 8rem;
  `}
`;

export const SectionBanner = styled.section`
  ${() => css`
    margin: 4rem 1.6rem;

    ${media.greaterThan('medium')`
      margin: 4rem 0;
      position: relative;
      z-index: 40;
    `}
  `}
`;

export const SectionNews = styled(Sections)`
  ${() => css`
    margin-bottom: 11.2rem;

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: #fafafa;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: #272727;
      }
    `}
  `}
`;

export const SectionMostPopular = styled(Sections)``;

export const SectionUpcoming = styled(Sections)`
  ${() => css`
    ${HighlightStyles.Wrapper} {
      margin-top: 9.6rem;
    }
  `}
`;

export const SectionFreeGames = styled(Sections)``;

export const SectionFooter = styled.section`
  ${() => css`
    margin-top: 3.2rem;
    padding-bottom: 1.6rem;
    padding-top: 5.6rem;
    background-color: #fafafa;
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: 11.2rem;
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`;
