import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '../components'

export default {
  title: 'Form/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
Default.args = {
  value: true
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'I Agree'
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Please check the box',
  type: 'warning'
}
