import { FC } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './components/UI/pages/HomePage'
import ImagePage from './components/UI/pages/ImagePage'

const App: FC = () => {

  return (
    <div className="App">
      <header className="App-header">
          <p>React Album!</p>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="image">
                    <Route path=":id" element={<ImagePage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  )
}

export default App
