import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    max-width: 130rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  `}
`;
