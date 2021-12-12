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

export const WithIcon = Template.bind({})
WithIcon.args = {
  type: 'primary',
  text: 'Scan Barcode',
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2 4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H5C5.26522 3 5.51957 3.10536 5.70711 3.29289C5.89464 3.48043 6 3.73478 6 4V16C6 16.2652 5.89464 16.5196 5.70711 16.7071C5.51957 16.8946 5.26522 17 5 17H3C2.73478 17 2.48043 16.8946 2.29289 16.7071C2.10536 16.5196 2 16.2652 2 16V4ZM8 4C8 3.73478 8.10536 3.48043 8.29289 3.29289C8.48043 3.10536 8.73478 3 9 3H11C11.2652 3 11.5196 3.10536 11.7071 3.29289C11.8946 3.48043 12 3.73478 12 4V16C12 16.2652 11.8946 16.5196 11.7071 16.7071C11.5196 16.8946 11.2652 17 11 17H9C8.73478 17 8.48043 16.8946 8.29289 16.7071C8.10536 16.5196 8 16.2652 8 16V4ZM15 3C14.7348 3 14.4804 3.10536 14.2929 3.29289C14.1054 3.48043 14 3.73478 14 4V16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4804 16.8946 14.7348 17 15 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3H15Z" />
    </svg>
  )
}
