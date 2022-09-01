import { Story, Meta } from '@storybook/react'
import Rating, { RatingProps } from '.'

export default {
  title: 'Rating',
  component: Rating
} as Meta

export const Default: Story<RatingProps> = (args) => <Rating {...args} />
