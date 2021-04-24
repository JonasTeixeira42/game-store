import styled, { css } from 'styled-components';

import * as HeadingStyles from 'components/Heading/styles';
import media from 'styled-media-query';

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    margin-top: 3.2rem;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`;

export const Column = styled.div`
  a,
  span {
    display: block;
    color: #8f8f8f;
    text-decoration: none;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    transition: all 0.3s;
  }
  a:hover {
    text-decoration: underline;
    color: #f231a5;
  }
`;

export const Copyright = styled.div`
  color: #8f8f8f;
  font-size: 1.2rem;
  margin-top: 3.2rem;
  margin-bottom: 4rem;
  text-align: center;
`;
