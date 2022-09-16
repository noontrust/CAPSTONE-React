import React from 'react'

import PropTypes from 'prop-types'

import './burger-menu.css'

const BurgerMenu = (props) => {
  return (
    <div
      mobileMenu="data-type: MobileMenu"
      className={`burger-menu-container ${props.rootClassName} `}
    >
      <header data-role="Header" className="burger-menu-header">
        <div className="burger-menu-icon-group">
          <svg
            viewBox="0 0 1024 1024"
            closeMobileMenu="data-type: CloseMobileMenu"
            className="burger-menu-icon"
          >
            <path
              d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
              className=""
            ></path>
          </svg>
        </div>
      </header>
      <button className="button burger-menu-button">{props.button}</button>
      <button className="button burger-menu-button1">{props.button3}</button>
      <button className="button burger-menu-button2">{props.button2}</button>
    </div>
  )
}

BurgerMenu.defaultProps = {
  button: 'Notification History',
  button3: 'Account Settings',
  button2: 'Log Out',
  rootClassName: '',
}

BurgerMenu.propTypes = {
  button: PropTypes.string,
  button3: PropTypes.string,
  button2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BurgerMenu
