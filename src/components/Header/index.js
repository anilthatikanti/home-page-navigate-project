// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navBar">
    <div className="logo">
      <img
        className="logoIcon"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="logoName">Wave</h1>
    </div>
    <ul className="unList">
      <li>
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
