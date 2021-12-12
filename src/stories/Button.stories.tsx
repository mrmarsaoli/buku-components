import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../components/Button'
import { BLUE_10, BLUE_80 } from '../constants/colors'

export default {
  title: 'Example/Button',
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

export const Gray = Template.bind({})
Gray.args = {
  type: 'gray',
  text: 'Gray'
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
  backgroundColor: BLUE_80,
  color: BLUE_10
}
