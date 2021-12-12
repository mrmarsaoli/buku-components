import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Pagination } from '../components'

export default {
  title: 'Action/Pagination',
  component: Pagination,
  argTypes: {
    activeTextColor: { control: 'color' },
    activeBackgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Default = Template.bind({})
Default.args = {
  total: 60,
  current: 1,
  itemPerPage: 5
}

export const NoArrow = Template.bind({})
NoArrow.args = {
  total: 60,
  current: 1,
  itemPerPage: 5,
  arrow: false
}
