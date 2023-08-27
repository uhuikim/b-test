import type { Meta, StoryObj } from '@storybook/react'
import Button from 'components/Button'

const meta = {
    title: 'Component/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        label: 'Button',
        color: 'error',
    },
}

export const Large: Story = {
    args: {
        size: 'full',
        label: 'Button',
    },
}

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
}
