import { Route, Routes } from 'react-router-dom'

import List from 'pages/List'
import Upload from 'pages/Upload'
import Detail from 'pages/Detail'

import ErrorBoundary from 'components/Error/ErrorBoundary'

import 'styles/globals.scss'

function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path='/'>
                    <Route index element={<List />} />
                    <Route path='/upload' element={<Upload />} />
                    <Route path='/detail/:id' element={<Detail />} />
                </Route>
            </Routes>
        </ErrorBoundary>
    )
}

export default App
