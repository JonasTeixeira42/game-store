import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

import backgroundImage from 'assets/images/red-dead-img.jpg';
import floatImage from 'assets/images/red-dead-float.png';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back',
    subtitle: "Come see Jonh's new adveture",
    buttonLabel: 'Buy now',
    backgroundImage,
  },
} as Meta;

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;

Default.parameters = {
  layout: 'fullscreen',
};

export const withFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

withFloatImage.parameters = {
  layout: 'fullscreen',
};

withFloatImage.args = {
  floatImage,
};
