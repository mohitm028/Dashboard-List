// import { useLocation } from 'react-router-dom'

import "./index.css"

// import { DASHBOARD } from '../constants/appConfig'

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <div className="topbar-title">MyApp</div>
        <div className="topbar-logo">
          <img src="/logo.png" alt="Logo" height="40" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
