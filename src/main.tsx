import { worker } from 'mocks/browser'
import React from 'react'
import { RecoilRoot } from 'recoil'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App'

if (import.meta.env.MODE === 'development') {
    worker.start()
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            suspense: true,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </RecoilRoot>,
    // </React.StrictMode>,
)
