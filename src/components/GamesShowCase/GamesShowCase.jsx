import React from 'react'

import GamesShowCaseData from "../../Content/GamesShowCaseData"

import './GamesShowCase.scss'

import githubLogo from "../../assets/github.svg";
import steamLogo from "../../assets/steam.svg";
import discordLogo from "../../assets/discord.svg";

const GamesShowCase = () => {
  return (
    <div className='game-container fadeInFromBottom'>
        {
            GamesShowCaseData.map((game, index) => (
                <div key={index} className='game-card'>
                    <div className='game-card__image'>
                        <img src={game.image} alt={game.title} />
                    </div>
                    <div className='game-card__title'>
                        {game.title}
                    </div>
                    <div className='game-card__description'>
                        {game.description}
                    </div>
                    <div className='game-card__links'>
                        {game.steam !== '' ? 
                        <a href={game.steam} target='_blank' rel="noreferrer">
                            <img src={steamLogo} alt='steam ' width={24} />
                        </a> 
                        : null}
                        
                        {game.discord !== '' ? 
                        <a href={game.discord} target='_blank' rel="noreferrer">
                            <img src={discordLogo} alt='discord' width={24} />
                        </a> 
                        : null}
                        
                        {game.play !== '' ? 
                        <a href={game.play} target='_blank' rel="noreferrer">
                            <img src={githubLogo} alt='play' width={24} />
                        </a> 
                        : null}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default GamesShowCase