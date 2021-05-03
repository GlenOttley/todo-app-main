import React from 'react';
import headerImgMobileLight from '../images/bg-mobile-light.jpg';
import headerImgMobileDark from '../images/bg-mobile-dark.jpg';
import headerImgDesktopLight from '../images/bg-desktop-light.jpg';
import headerImgDesktopDark from '../images/bg-desktop-dark.jpg';
import moonIcon from '../images/icon-moon.svg';
import sunIcon from '../images/icon-sun.svg';

function Header({ toggleTheme, theme }) {
	return (
		<div className="header">
			<img 
			src={theme === 'light' ? headerImgMobileLight : headerImgMobileDark} 
			className="header__img--mobile" 
			alt="mountains" 
			/>
			<img 
			src={theme === 'light' ? headerImgDesktopLight : headerImgDesktopDark} 
			className="header__img--desktop" 
			alt="mountains" 
			/>
			<div className="header__message container">
				<h1 className="header__text">TODO</h1>
				<img 
				src={theme === 'light' ? moonIcon : sunIcon} 
				className="header__toggle" 
				alt="toggle night mode" 
				onClick={toggleTheme}/>
			</div>
		</div>
	)
}

export default Header