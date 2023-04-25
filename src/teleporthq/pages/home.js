import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Worthy Capital Dotterel</title>
        <meta property="og:title" content="Worthy Capital Dotterel" />
      </Helmet>
    </div>
  )
}

export default Home
