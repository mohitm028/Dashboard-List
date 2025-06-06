import { Route, Routes } from 'react-router-dom'

import './App.css'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Data from './pages/Data'
// import Topbar from './components/Topbar'

function App() {

  return (
    <div className="app-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        {/* <Topbar /> */}
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
