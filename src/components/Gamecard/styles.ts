import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 1.6rem 0;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  border-radius: 4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ImageBox = styled.div`
  height: 23rem;
  width: 100%;
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;

  overflow: hidden;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin: 1.6rem 0;
  `}
`;

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`;

export const Title = styled.h3`
  ${() => css`
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 600;
    color: #143254;
  `}
`;

export const Developer = styled.h3`
  ${() => css`
    font-size: 1.4rem;
    font-weight: 400;
    color: #8f8f8f;
  `}
`;

export const FavButton = styled.div`
  ${() => css`
    color: #f231a5;
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;
    svg {
      width: 2.5rem;
    }
  `}
`;

export const BuyBox = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.8rem;
  `}
`;

type PriceProps = {
  isPromotional?: boolean;
};

const priceModifiers = {
  defaut: () => css`
    color: #fafafa;
    padding: 0 0.8rem;
    background-color: #3cd3c1;
    border-radius: 0.4rem;
    margin-right: 0.4rem;
  `,

  promotional: () => css`
    color: #8f8f8f;
    text-decoration: line-through;
    margin-right: 1.6rem;
    font-weight: 400;
  `,
};

export const Price = styled.div<PriceProps>`
  ${({ isPromotional }) => css`
    display: inline-flex;
    font-weight: 600;
    height: 3rem;
    align-items: center;

    ${!isPromotional && priceModifiers.defaut}
    ${isPromotional && priceModifiers.promotional}
  `}
`;
