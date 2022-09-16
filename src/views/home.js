import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>CAPSTONE</title>
        <meta property="og:title" content="CAPSTONE" />
      </Helmet>
      <img
        alt="image"
        src="https://seeklogo.com/images/L/lus-fiber-logo-9AFCD9FC2C-seeklogo.com.png"
        className="home-image"
      />
    </div>
  )
}

export default Home
