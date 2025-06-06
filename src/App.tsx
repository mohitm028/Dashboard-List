import { Route, Routes } from 'react-router-dom'

import './App.css'

import Sidebar from './components/Sidebar'
import Home from './pages/Home/Home'
import Data from './pages/DataList/Data'
import { ToastContainer } from 'react-toastify'


function App() {

  return (<>
    <ToastContainer />
    <div className="app-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        {/* <Topbar /> */}
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<Data />} />
          </Routes>
        </div>
      </div>
    </div>
  </>

  )
}

export default App
