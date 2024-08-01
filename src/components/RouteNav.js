import { NavLink } from "react-router-dom"

function RouteNav() {
    return (
    <header>
      <nav className="navbar bg-dark p-4 navbar-expand-lg">
        <h1 className="text-white">MoneyPort</h1>
        <NavLink to='/' className="link-opacity-50-hover ms-4 text-decoration-none text-white">Home</NavLink>
        <NavLink to='/learningCentre' className="link-opacity-50-hover ms-4 text-decoration-none text-white">Learning Centre</NavLink>
          <NavLink to='/virtualTradingEnv' className="link-opacity-50-hover ms-4 text-decoration-none text-white">Virtual Trading</NavLink>
          <NavLink to='/virtualTradingAdmin' className="link-opacity-50-hover ms-4 text-decoration-none text-white">VT Admin</NavLink>
        <NavLink to='/login' className="link-opacity-50-hover ms-4 text-decoration-none text-white">Log in</NavLink>
      </nav>
    </header>
    )
}

export default RouteNav
