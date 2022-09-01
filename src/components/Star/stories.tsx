import { Story, Meta } from '@storybook/react'
import Star, { StarProps } from '.'

export default {
  title: 'Star',
  component: Star
} as Meta

export const Default: Story<StarProps> = (args) => <Star {...args} />
