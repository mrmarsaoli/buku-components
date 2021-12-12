import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GREEN_10, GREEN_80 } from '../constants/colors'
import { Button } from '../components'

export default {
  title: 'Action/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Secondary'
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  text: 'Primary'
}

export const Neutral = Template.bind({})
Neutral.args = {
  type: 'neutral',
  text: 'Neutral'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  text: 'Warning'
}

export const Outline = Template.bind({})
Outline.args = {
  type: 'outline',
  text: 'Outline'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  text: 'Large'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  text: 'Small'
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  text: 'Custom Color',
  backgroundColor: GREEN_80,
  color: GREEN_10
}
