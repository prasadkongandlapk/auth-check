import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-bg">
    <Link to="/">
      <p className="pp">Home</p>
    </Link>
    <Link to="/about">
      <p>About</p>
    </Link>
  </div>
)

export default Header
