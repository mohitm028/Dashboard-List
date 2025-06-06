import { NavLink, useLocation } from 'react-router-dom'

import "./index.css"

import { menuItems } from '../constants/listConfig'
import { DASHBOARD } from '../constants/appConfig'

const Sidebar = () => {
    const location = useLocation()

  const currentTitle =
    menuItems.find((item) => item.path === location.pathname)?.label || DASHBOARD

  return (
  <div className="sidebar-container">
  <h4>{currentTitle}</h4>
  <hr />
  {menuItems.map((item) => (
    <NavLink
      to={item.path}
      key={item.path}
      className={({ isActive }) =>
        `sidebar-link ${isActive ? 'active' : ''}`
      }
    >
      <span className="sidebar-icon">{item.icon}</span>
      {item.label}
    </NavLink>
  ))}
</div>
  )
}

export default Sidebar
