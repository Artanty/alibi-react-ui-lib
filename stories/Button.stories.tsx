import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../src/button/Button';

const meta: Meta = {
  title: 'Welcome',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
export const Basic: Story = {};

export const WithProp: Story = {
  render: () => <Button 
    onClick={() => alert('Test')}
    children='Some text'
    variant='primary'
    isDisabled
    />,
};

