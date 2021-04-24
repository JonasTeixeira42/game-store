import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'normal' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  size = 'normal',
  icon,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper fullWidth={fullWidth} size={size} hasIcon={!!icon} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default Button;
