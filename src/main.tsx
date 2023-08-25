import { worker } from 'mocks/browser'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import App from './App'

if (import.meta.env.MODE === 'development') {
    worker.start()
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ReactQueryDevtools initialIsOpen={true} />
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
)
