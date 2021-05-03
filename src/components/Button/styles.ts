import styled, { css } from 'styled-components';

import { ButtonProps } from '.';

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth'>;

const wrapperModifiers = {
  normal: () => css`
    height: 3rem;
    font-size: 1.2rem;
  `,

  medium: () => css`
    height: 4rem;
    font-size: 1.4rem;
    padding: 0.8rem 3.2rem;
  `,

  large: () => css`
    height: 5rem;
    font-size: 1.6rem;
    padding: 0.8rem 4.8rem;
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: 0.8rem;
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ size, hasIcon, fullWidth }) => css`
    background: #f80759;
    color: #fafafa;
    border: 0;
    border-radius: 0.4rem;
    padding: 0.8rem;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #ad043e;
    }

    ${!!size && wrapperModifiers[size]}
    ${hasIcon && wrapperModifiers.withIcon}
    ${fullWidth && wrapperModifiers.fullWidth}
  `}
`;
