import React from "react";

const Flags = () => {
  const [country, setCountry] = React.useState({});
  const [hotStreak, setHotStreak] = React.useState(
    parseInt(localStorage.getItem("hotStreakFlags"))
      ? parseInt(localStorage.getItem("hotStreakFlags"))
      : 0
  );

  const [error, setError] = React.useState("");

  const checkAnwser = (e) => {
    console.log(e.target.id);
    if (e.target.id.split(" ")[0] === e.target.id.split(" ")[1]) {
      setHotStreak((e) => e + 1);
      localStorage.setItem("hotStreakFlags", parseInt(hotStreak + 1));
      randomCountry();
    } else {
      setHotStreak(0);
      localStorage.setItem("hotStreakFlags", parseInt(0));
      randomCountry();
    }
  };

  const randomCountry = () => {
    fetch("https://api.fern.fun/flagathon/country/random/")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        data.options.push(data.country);
        setError("");
      })
      .catch(setError("Error"));
  };

  React.useEffect(() => {
    randomCountry();
  }, []);

  return (
    <>
      <div className="guessPanel">
        {error === "" ? (
          <>
            <div id="hotStreak">
              <img src="/img/fire.svg" alt="hotStreak" />
              {hotStreak}
            </div>
            <div id="img">
              {country ? (
                <img src={country.flag} alt={country.country} />
              ) : (
                <img alt="no-img" />
              )}
            </div>
            <div id="anwsers">
              <button
                id={
                  country["options"] !== undefined
                    ? country.options[0].split("|")[1] + " " + country.country
                    : null
                }
                onClick={checkAnwser}
              >
                {country["options"] !== undefined
                  ? country.options[0].split("|")[0]
                  : null}
              </button>

              <button
                id={
                  country["options"] !== undefined
                    ? country.options[1].split("|")[1] + " " + country.country
                    : null
                }
                onClick={checkAnwser}
              >
                {country["options"] !== undefined
                  ? country.options[1].split("|")[0]
                  : null}
              </button>

              <button
                id={
                  country["options"] !== undefined
                    ? country.options[2].split("|")[1] + " " + country.country
                    : null
                }
                onClick={checkAnwser}
              >
                {country["options"] !== undefined
                  ? country.options[2].split("|")[0]
                  : null}
              </button>

              <button
                id={
                  country["options"] !== undefined
                    ? country.options[3].split("|")[1] + " " + country.country
                    : null
                }
                onClick={checkAnwser}
              >
                {country["options"] !== undefined
                  ? country.options[3].split("|")[0]
                  : null}
              </button>
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
};

export default Flags;
