import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from 'components'

const meta = {
    title: 'Component/Divider',
    component: Divider,
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: () => <Divider />,
}
