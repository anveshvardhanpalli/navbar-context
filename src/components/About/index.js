import './index.css'

import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      return (
        <div className={bgColor}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="about-class"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="about-class"
            />
          )}
          <h1>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
