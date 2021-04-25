import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import GameCardSlider from '.';
import { GameCardProps } from 'components/Gamecard';

import items from './mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '5rem auto' }}>
    <GameCardSlider items={items} {...args} />
  </div>
);
