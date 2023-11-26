import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import GamesShowCaseData from "../../content/GamesShowCaseData";

import "./GamesShowCase.scss";

import githubLogo from "../../assets/github.svg";
import steamLogo from "../../assets/steam.svg";
import discordLogo from "../../assets/discord.svg";
import schedule from "../../assets/schedule.svg";

const GamesShowCase = () => {
  const navigate = useNavigate();

  return (
    <div className="game-container fadeInFromBottom">
      {GamesShowCaseData.map((game, index) => (
        <div key={index} className="game-card">
          <div className="game-card__image">
            <img src={game.image} alt={game.title} />
          </div>
          <div className="game-card__content">
            <div className="game-card__title">
              <span>{game.title}</span>
            </div>
            <div className="game-card__tags">
              {game.tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
            <div className="game-card__release-date">
              <img src={schedule} alt="schedule" />
              <span>{game.releaseDate}</span>
            </div>
          </div>
          <div className="game-card__links">
            {game.play != "" ? (
              <button onClick={() => navigate(game.play)}>Play</button>
            ) : (
              <button disabled>Play</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesShowCase;
