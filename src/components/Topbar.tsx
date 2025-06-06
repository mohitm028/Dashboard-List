import { useLocation } from 'react-router-dom'

import "./index.css"

import { DASHBOARD } from '../constants/appConfig'

const routeTitleMap: Record<string, string> = {
  '/': 'Home',
  '/data': 'Data',
}

const Topbar = () => {
  const { pathname } = useLocation()
  const title = routeTitleMap[pathname] || DASHBOARD

  return (
    <div
      style={{
        backgroundColor: '#f1f1f1',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ddd',
        fontWeight: 600,
        fontSize: '1.25rem',
      }}
    >
      {title}
    </div>
  )
}

export default Topbar
