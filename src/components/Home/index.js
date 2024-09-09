import './index.css'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? 'dark-theme' : 'light-theme'
      const fontColor = isDarkTheme ? '#ffffff' : '#000000'
      return (
        <div className={`home-container ${bgColor}`}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="website-logo"
              className="website-logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="website-logo"
              className="website-logo"
            />
          )}
          <h1 color={fontColor}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
