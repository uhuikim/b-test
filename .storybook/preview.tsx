import React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { RecoilRoot } from 'recoil'
import '../src/styles/globals.scss'

export const parameters = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                order: ['Components'],
            },
        },
    },
}

export const decorators = [
    withRouter,
    (Story) => (
        <RecoilRoot>
            <div id='portal' />
            <Story />
        </RecoilRoot>
    ),
]
