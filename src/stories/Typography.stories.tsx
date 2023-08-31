import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from 'components'

const meta = {
    title: 'Component/Typography',
    component: Typography,
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        text: '텍스트',
        type: 'title',
    },
}
