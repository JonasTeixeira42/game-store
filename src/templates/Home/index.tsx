import React from 'react';

import Menu from 'components/Menu';
import Footer from 'components/Footer';
import Heading from 'components/Heading';
import BannerSlider from 'components/BannerSlider';
import GameCardSlider from 'components/GameCardSlider';
import { Container } from 'components/Container';
import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/Gamecard';
import Highlight, { HighlightProps } from 'components/Highlight';

import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight,
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />

        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="#F231A5" color="#FAFAFA">
            News
          </Heading>

          <GameCardSlider items={newGames} />
        </Container>
      </S.SectionNews>

      <S.SectionMostPopular>
        <Container>
          <Heading lineLeft lineColor="#3CD3C1" color="#FAFAFA">
            Most Popular
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} color="#FAFAFA" />
        </Container>
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Container>
          <Heading lineLeft lineColor="#3CD3C1" color="#FAFAFA">
            Upcoming
          </Heading>

          <GameCardSlider items={upcomingGames} color="#272727" />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingMoreGames} color="#272727" />
        </Container>
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Container>
          <Heading lineLeft lineColor="#3CD3C1" color="#FAFAFA">
            Free games
          </Heading>

          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} color="#FAFAFA" />
        </Container>
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
};

export default Home;
