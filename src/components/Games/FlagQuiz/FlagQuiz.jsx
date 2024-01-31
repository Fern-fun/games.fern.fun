import React, { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

import "./FlagQuiz.scss";

const FlagQuiz = () => {
  const [randomCountry, setRandomCountry] = useState(
    JSON.parse(localStorage.getItem("randomCountry")) || {}
  );

  const [hotStreak, setHotStreak] = useState(
    parseInt(localStorage.getItem("hotStreak") || 0)
  );

  const [bestStreak, setBestStreak] = useState(
    parseInt(localStorage.getItem("bestStreak") || 0)
  );

  useEffect(() => {
    if (Object.keys(randomCountry).length === 0) {
      getRandomCountry();
    }
  }, []);

  const getRandomCountry = () => {
    fetch("https://apiv2.fern.fun/countries/random/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setRandomCountry(data);
        localStorage.setItem("randomCountry", JSON.stringify(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOptionClick = (event) => {
    const selectedOption = event.target.innerText;
    if (selectedOption === randomCountry.country_name) {
      setHotStreak((e) => {
        localStorage.setItem("hotStreak", e + 1);
        if (e + 1 > bestStreak) {
          localStorage.setItem("bestStreak", e + 1);
          setBestStreak(e + 1);
        }
        return e + 1;
      });

      getRandomCountry();
    } else {
      setHotStreak(0);
      localStorage.setItem("hotStreak", 0);
      getRandomCountry();
    }
  };

  return (
    <div className="page-container">
      {Object.keys(randomCountry).length === 0 ? (
        <Rings
          height="80"
          width="80"
          color="#fa3232"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      ) : (
        <div className="flag-quiz-container">
          <h1>Flag Quiz</h1>
          <h2>Hot Streak: {hotStreak}</h2>
          <h2>Best Streak: {bestStreak}</h2>
          <div className="flag-quiz-flag">
            <img
              src={randomCountry.flag}
              alt={randomCountry.name}
              width={200}
            />
          </div>
          <div className="flag-quiz-options">
            {"options" in randomCountry
              ? randomCountry.options.map((option, index) => (
                  <button key={index} onClick={(e) => handleOptionClick(e)}>
                    {option.name}
                  </button>
                ))
              : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlagQuiz;
