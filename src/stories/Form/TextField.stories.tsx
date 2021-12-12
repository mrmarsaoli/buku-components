import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextField } from '../../components'

export default {
  title: 'Form/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Normal input'
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Input',
  placeholder: 'Normal input'
}

export const Large = Template.bind({})
Large.args = {
  label: 'Input',
  size: 'lg',
  placeholder: 'Large input'
}

export const Small = Template.bind({})
Small.args = {
  label: 'Input',
  size: 'sm',
  placeholder: 'Small input'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Input',
  placeholder: 'Invalid',
  error: 'Error message will show here'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Email',
  placeholder: 'muhaimin.rezki@bukuwarung.com',
  icon: (
    <svg
      className="w-5 h-5 text-gray-500"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  )
}
