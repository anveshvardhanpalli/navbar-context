import './index.css'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme} = value

      const OnChangeTheme = () => {
        toggleTheme()
      }
      return (
        <div className="navbar-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website-logo"
            className="home-img"
          />
          <div className="link-element-class">
            <Link to="/" className="link-element">
              <h1>Home</h1>
            </Link>
            <Link to="/about" className="link-element">
              <h1>About</h1>
            </Link>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="theme-img"
              onClick={OnChangeTheme}
            />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
