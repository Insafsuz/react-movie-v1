import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components'
import { Home, Catalog } from './pages'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category' element={<Catalog />} />
      </Routes>
    </div>
  )
}

export default App
