import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Gamecard, { GameCardProps } from '.';

export default {
  title: 'Gamecard',
  component: Gamecard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/random/300x140',
    price: 'R$ 235,00',
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Gamecard {...args} />
  </div>
);
