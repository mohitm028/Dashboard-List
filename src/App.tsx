import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Data from './pages/Data'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="app-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
       <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
