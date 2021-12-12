import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Textarea } from '../../components'

export default {
  title: 'Form/Textarea',
  component: Textarea
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Normal textarea'
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Input',
  placeholder: 'Textarea with label'
}

export const Large = Template.bind({})
Large.args = {
  label: 'Input',
  size: 'lg',
  placeholder: 'Large textarea'
}

export const Small = Template.bind({})
Small.args = {
  label: 'Input',
  size: 'sm',
  placeholder: 'Small textarea'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Input',
  placeholder: 'Invalid',
  error: 'Error message will show here'
}
