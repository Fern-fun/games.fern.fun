import React from 'react'
import GamesShowCase from '../components/GamesShowCase/GamesShowCase'
import {Helmet} from "react-helmet";

const Games = () => {
  return (
    <div className="page-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Games</title>
        </Helmet>
        <GamesShowCase />
    </div>
  )
}

export default Games