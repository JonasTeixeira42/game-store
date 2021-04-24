import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/random/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
    buttonLabel: 'Buy now',
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

Default.parameters = {
  layout: 'fullscreen',
};
