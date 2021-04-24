import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${() => css`
    display: flex;
    align-items: center;
    padding: 2.4rem 0;
    position: relative;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;
type IconWrapperProps = {
  hideOnMobile?: boolean;
};

const iconWrapperModifiers = {
  hideOnMobile: () => css`
    ${media.greaterThan('medium')`
      display: none;
    `}
  `,
};

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ hideOnMobile }) => css`
    color: #fafafa;
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;

    ${hideOnMobile && iconWrapperModifiers.hideOnMobile}
  `}
`;

export const MenuGroup = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    justify-content: flex-end;

    > div {
      margin-left: 1.6rem;
    }
  `}
`;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;

    background: #fafafa;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1.6rem;
      width: 2.4rem;
      height: 2.4rem;
      cursor: pointer;
    }

    ${MenuLink} {
      color: #272727;
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 2.4rem;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
  `}
`;

type menuNavProps = {
  hideOnMobile?: boolean;
};

const menuNavWrapper = {
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      display: none;
    `}
  `,
};

export const MenuNav = styled.div<menuNavProps>`
  ${({ hideOnMobile }) => css`
    ${media.greaterThan('medium')`
      margin-left: 2.4rem;
    `}

    ${hideOnMobile && menuNavWrapper.hideOnMobile}
  `}
`;

export const MenuLink = styled.a`
  ${() => css`
    position: relative;
    color: #fafafa;
    font-size: 1.6rem;
    margin: 0.3rem 2.4rem 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: #f231a5;
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;
