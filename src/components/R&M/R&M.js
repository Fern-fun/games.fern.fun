import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RANDM() {
  const [data, setData] = React.useState({});

  const [hotStreak, setHotStreak] = React.useState(
    parseInt(localStorage.getItem("hotStreakRandM"))
      ? parseInt(localStorage.getItem("hotStreakRandM"))
      : 0
  );

  const [error, setError] = React.useState("");

  const checkAnwser = (e) => {
    if (e.target.id === data.correct) {
      setHotStreak((e) => e + 1);
      localStorage.setItem("hotStreakRandM", parseInt(hotStreak + 1));
      randomData();
    } else {
      setHotStreak(0);
      localStorage.setItem("hotStreakRandM", parseInt(0));
      randomData();
    }
  };

  const randomData = () => {
    fetch("https://api.fern.fun/r&m/random")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        data.options.push(data.correct);
        setError("");
      })
      .catch(setError("Error"));
  };

  React.useEffect(() => {
    randomData();
  }, []);

  return (
    <>
      <div className="guessPanel">
        {error === "" ? (
          <>
            <div id="hotStreak">
              <LazyLoadImage src="/img/fire.svg" alt="hotStreak" />
              {hotStreak}
            </div>
            <div id="flags">
              {"character" in data ? (
                <LazyLoadImage src={data.character.image} alt={data.correct} />
              ) : (
                <img alt="no-img" />
              )}
            </div>
            <div id="anwsers">
              {"options" in data
                ? data.options.map((name) => (
                    <button id={name} key={name} onClick={checkAnwser}>
                      {name}
                    </button>
                  ))
                : ""}
            </div>
          </>
        ) : (
          <div className="loading">
            <img src="/img/loading.svg" />
          </div>
        )}
      </div>
    </>
  );
}

export default RANDM;
