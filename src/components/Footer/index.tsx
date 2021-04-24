import React from 'react';

import Logo from 'components/Logo';
import Heading from 'components/Heading';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="#272727" />
      <S.Content>
        <S.Column>
          <Heading color="#272727" size="small" lineBottom lineColor="#3CD3C1">
            Contact
          </Heading>

          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading color="#272727" size="small" lineBottom lineColor="#3CD3C1">
            Follow us
          </Heading>

          <nav>
            <a href="#" target="_blank">
              Instagram
            </a>
            <a href="#" target="_blank">
              Twitter
            </a>
            <a href="#" target="_blank">
              Youtube
            </a>
            <a href="#" target="_blank">
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="#272727" size="small" lineBottom lineColor="#3CD3C1">
            Links
          </Heading>

          <a href="#">Home</a>
          <a href="#">Store</a>
          <a href="#">Search</a>
        </S.Column>

        <S.Column>
          <Heading color="#272727" size="small" lineBottom lineColor="#3CD3C1">
            Location
          </Heading>

          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum dolor sit.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Won Games 2021 All rights reserved.</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
