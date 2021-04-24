import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'normal' | 'large';
  icon?: JSX.Element;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, size = 'normal', icon }: ButtonProps) => {
  return (
    <S.Wrapper size={size} hasIcon={!!icon}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default Button;
