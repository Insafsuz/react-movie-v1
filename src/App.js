import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Catalog, Detail } from './pages'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<Catalog />} />
        <Route path='/:category/:id' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
