import React from 'react'

import { Helmet } from 'react-helmet'

import BurgerMenu from '../components/burger-menu'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>CAPSTONE</title>
        <meta property="og:title" content="CAPSTONE" />
      </Helmet>
      <header id="navbar" data-role="Header" className="home-header">
        <img
          alt="logo"
          src="https://seeklogo.com/images/L/lus-fiber-logo-9AFCD9FC2C-seeklogo.com.png"
          className="home-image"
        />
        <div className="home-icon-group">
          <svg
            viewBox="0 0 1024 1024"
            burgerMenu="data-type: BurgerMenu"
            className="home-icon"
          >
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <BurgerMenu rootClassName="burger-menu-root-class-name"></BurgerMenu>
      </header>
      <img
        alt="image"
        src="/playground_assets/map%20placeholder-1300w.png"
        className="home-image1"
      />
      <button className="home-button button">
        <span className="content">
          <span className="home-text1">Report an Outage</span>
          <br></br>
        </span>
      </button>
      <h1 className="home-text3">
        <span className="home-text4">Recent Notifications</span>
        <br></br>
      </h1>
      <span className="home-text6">
        • Maintenance scheduled for Tuesday, October 4th at 8 pm
      </span>
      <span className="home-text7">
        • Downed line on Johnston Street, expected to be fixed by 8 pm
      </span>
    </div>
  )
}

export default Home
