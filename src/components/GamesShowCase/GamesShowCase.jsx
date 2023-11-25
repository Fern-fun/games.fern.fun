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
                <div key={index} className='game-card' onClick={(e) => console.log(e)}>
                    <div className='game-card__image'>
                        <img src={game.image} alt={game.title} />
                    </div>
                    <div className='game-card__content'> 
                        <div className='game-card__title'>
                            <span>{game.title}</span>
                        </div>
                        <div className='game-card__tags'>
                            {game.tags.map((tag) => <div key={tag}>{tag}</div>)}  
                        </div>
                    </div>
                    <div className='game-card__links'>
                        <button>Play</button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default GamesShowCase