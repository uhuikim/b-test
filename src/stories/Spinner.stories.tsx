import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from 'components'

const meta = {
    title: 'Component/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        dim: false,
    },
}
