import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'components'

const meta = {
    title: 'Component/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Button',
        type: 'button',
        variant: 'contain',
        color: 'primary',
        size: 'medium',
    },
}
