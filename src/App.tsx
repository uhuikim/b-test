import Layout from 'components/Layout'
import 'styles/globals.scss'
import { Route, Routes } from 'react-router-dom'
import List from 'pages/List'
import Upload from 'pages/Upload'
import Detail from 'pages/Detail'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<List />} />
                <Route path='/upload' element={<Upload />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Route>
        </Routes>
    )
}

export default App
