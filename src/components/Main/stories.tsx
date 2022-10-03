import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default Title',
    description: 'Default Description'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic',
  description: 'Content'
}

export const Default: Story = (args) => <Main {...args} />
