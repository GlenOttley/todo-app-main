import React from 'react'
import headerImgDesktopLight from '../images/bg-desktop-light.jpg'
import headerImgDesktopDark from '../images/bg-desktop-dark.jpg'
import moonIcon from '../images/icon-moon.svg'
import sunIcon from '../images/icon-sun.svg'

function Header({ toggleTheme, theme }) {
  return (
    <div
      className='header'
      style={{
        backgroundImage:
          theme === 'light'
            ? `url(${headerImgDesktopLight})`
            : `url(${headerImgDesktopDark})`,
      }}
    >
      <div className='header__message container'>
        <h1 className='header__text'>TODO</h1>
        <img
          src={theme === 'light' ? moonIcon : sunIcon}
          className='header__toggle'
          alt='toggle night mode'
          onClick={toggleTheme}
        />
      </div>
    </div>
  )
}

export default Header
