import { useState, useEffect } from "react";
import "./Fight.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Fight = ({ selectedPokemon }) => {
  const [fightPageUserPokemon, setFightPageUserPokemon] = useState();
  const [fightPageCPUPokemon, setFightPageCPUPokemon] = useState();
  const [fightStatus, setFightStatus] = useState(false);
  const [userHealth, setUserHealth] = useState();
  const [CPUHealth, setCPUHealth] = useState();
  const [endUserTurn, setEndUserTurn] = useState(false);
  const [endCPUTurn, setEndCPUTurn] = useState(false);
  const [endUserTurn2, setEndUserTurn2] = useState(false);
  const [endCPUTurn2, setEndCPUTurn2] = useState(false);
  const [endUserTurn3, setEndUserTurn3] = useState(false);
  const [endCPUTurn3, setEndCPUTurn3] = useState(false);
  const [endUserTurn4, setEndUserTurn4] = useState(false);
  const [endCPUTurn4, setEndCPUTurn4] = useState(false);
  const [userTurnAnnouncement, setUserTurnAnnouncement] = useState(false);
  const [CPUTurnAnnouncement, setCPUTurnAnnouncement] = useState(false);
  const [userWins, setUserWins] = useState(false);
  const [CPUWins, setCPUWins] = useState(false);
  const [secondFightRoundCPU, setSecondFightRoundCPU] = useState(false);
  const [secondFightRoundUser, setSecondFightRoundUser] = useState(false);
  const [thirdFightRoundCPU, setThirdFightRoundCPU] = useState(false);
  const [thirdFightRoundUser, setThirdFightRoundUser] = useState(false);
  const [fourthFightRoundCPU, setFourthFightRoundCPU] = useState(false);
  const [fourthFightRoundUser, setFourthFightRoundUser] = useState(false);
  const [draw, setDraw] = useState(false);
  const [endFight, setEndFight] = useState(false);

  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  const cpuPokemonSelect = Math.floor(Math.random() * 890);

  const fetchUserFightData = async () => {
    const res = await fetch(
      `https://pokefight-backend-cbka.onrender.com/pokemon/${selectedPokemon}`
    );
    const data = await res.json();
    setFightPageUserPokemon(data[0]);
    setUserHealth(data[0].base.HP);
  };

  const fetchCPUFightData = async () => {
    const res = await fetch(
      `https://pokefight-backend-cbka.onrender.com/pokemon/${cpuPokemonSelect}`
    );
    const data = await res.json();
    setFightPageCPUPokemon(data[0]);
    setCPUHealth(data[0].base.HP);
  };

  const updateUser = async () => {
    if (userWins) {
      const response = await fetch(
        "https://pokefight-backend-cbka.onrender.com/game/user",
        {
          method: "PUT",
          body: JSON.stringify({
            username: username,
            score: score + 100,
            _id: id,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const winData = await response.json();
      console.log(winData);
    }

    if (draw) {
      const response = await fetch(
        "https://pokefight-backend-cbka.onrender.com/game/user",
        {
          method: "PUT",
          body: JSON.stringify({
            username: username,
            score: score + 50,
            _id: id,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const drawData = await response.json();
      console.log(drawData);
    }
    if (CPUWins) {
      const response = await fetch(
        "https://pokefight-backend-cbka.onrender.com/game/user",
        {
          method: "PUT",
          body: JSON.stringify({
            username: username,
            score: score - 50,
            _id: id,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      const loseData = await response.json();
      console.log(loseData);
    }
  };

  const userAttacks = () => {
    setUserTurnAnnouncement(true);
    let timerFunc = setTimeout(() => {
      setUserTurnAnnouncement(false);
      setCPUHealth(
        fightPageCPUPokemon.base.HP - fightPageUserPokemon.base.Attack / 2
      );
      setEndUserTurn(true);
    }, 3000);
    return () => clearTimeout(timerFunc);
  };

  const CPUattacks = () => {
    setCPUTurnAnnouncement(true);
    let timerFunc = setTimeout(() => {
      setCPUTurnAnnouncement(false);
      setUserHealth(
        fightPageUserPokemon.base.HP - fightPageCPUPokemon.base.Attack / 2
      );
      setEndCPUTurn(true);
    }, 3000);
    return () => clearTimeout(timerFunc);
  };

  useEffect(() => {
    fetchUserFightData();
    fetchCPUFightData();
  }, []);

  useEffect(() => {
    const startFight = () => {
      if (fightPageUserPokemon.base.Speed > fightPageCPUPokemon.base.Speed) {
        userAttacks();
      } else {
        CPUattacks();
      }
    };

    if (fightStatus) {
      startFight();
    }
  }, [fightStatus]);

  useEffect(() => {
    if (userHealth > 0) {
      setUserTurnAnnouncement(true);

      setSecondFightRoundUser(true);
    }

    if (userHealth <= 0) {
      setCPUWins(true);
    }
  }, [endCPUTurn]);

  useEffect(() => {
    if (CPUHealth > 0) {
      setCPUTurnAnnouncement(true);

      setSecondFightRoundCPU(true);
    }

    if (CPUHealth <= 0) {
      setUserWins(true);
    }
  }, [endUserTurn]);

  useEffect(() => {
    const userAttacks = () => {
      let timerFunc = setTimeout(() => {
        setCPUHealth(CPUHealth - fightPageUserPokemon.base.Attack / 2);
        setUserTurnAnnouncement(false);
        setEndUserTurn2(true);
      }, 3000);
      return () => clearTimeout(timerFunc);
    };
    userAttacks();
  }, [secondFightRoundUser]);

  useEffect(() => {
    const CPUattacks = () => {
      let timerFunc = setTimeout(() => {
        setUserHealth(userHealth - fightPageCPUPokemon.base.Attack / 2);
        setCPUTurnAnnouncement(false);
        setEndCPUTurn2(true);
      }, 3000);
      return () => clearTimeout(timerFunc);
    };
    CPUattacks();
  }, [secondFightRoundCPU]);

  useEffect(() => {
    const userAttacks = () => {
      let timerFunc = setTimeout(() => {
        setCPUHealth(CPUHealth - fightPageUserPokemon.base.Attack / 2);
        setUserTurnAnnouncement(false);
        setEndUserTurn3(true);
      }, 3000);
      return () => clearTimeout(timerFunc);
    };
    userAttacks();
  }, [thirdFightRoundUser]);

  useEffect(() => {
    const CPUattacks = () => {
      let timerFunc = setTimeout(() => {
        setUserHealth(userHealth - fightPageCPUPokemon.base.Attack / 2);
        setCPUTurnAnnouncement(false);
        setEndCPUTurn3(true);
      }, 3000);
      return () => clearTimeout(timerFunc);
    };
    CPUattacks();
  }, [thirdFightRoundCPU]);

  useEffect(() => {
    if (userHealth > 0) {
      setUserTurnAnnouncement(true);

      setThirdFightRoundUser(true);
    }

    if (userHealth <= 0) {
      setCPUWins(true);
    }
  }, [endCPUTurn2]);

  useEffect(() => {
    if (CPUHealth > 0) {
      setCPUTurnAnnouncement(true);

      setThirdFightRoundCPU(true);
    }

    if (CPUHealth <= 0) {
      setUserWins(true);
    }
  }, [endUserTurn2]);

  useEffect(() => {
    if (userHealth > 0) {
      setUserTurnAnnouncement(true);

      setFourthFightRoundUser(true);
    }
    if (userHealth <= 0) {
      setCPUWins(true);
    }
  }, [endCPUTurn3]);

  useEffect(() => {
    if (CPUHealth > 0) {
      setCPUTurnAnnouncement(true);

      setFourthFightRoundCPU(true);
    }
    if (CPUHealth <= 0) {
      setUserWins(true);
    }
  }, [endUserTurn3]);

  useEffect(() => {
    const userAttacks = () => {
      let timerFunc = setTimeout(() => {
        setCPUHealth(CPUHealth - fightPageUserPokemon.base.Attack / 2);
        setUserTurnAnnouncement(false);
        setEndUserTurn4(true);
      }, 3000);
      return () => clearTimeout(timerFunc);
    };
    userAttacks();
  }, [fourthFightRoundUser]);

  useEffect(() => {
    const CPUattacks = () => {
      let timerFunc = setTimeout(() => {
        setUserHealth(userHealth - fightPageCPUPokemon.base.Attack / 2);
        setCPUTurnAnnouncement(false);
        setEndCPUTurn4(true);
      }, 3000);
      return () => clearTimeout(timerFunc);
    };
    CPUattacks();
  }, [fourthFightRoundCPU]);

  useEffect(() => {
    if (userHealth > 0) {
      setDraw(true);
      setEndFight(true);
      updateUser();
    }

    if (userHealth <= 0) {
      setCPUWins(true);
      setEndFight(true);
      updateUser();
    }
  }, [endCPUTurn4]);

  useEffect(() => {
    if (CPUHealth > 0) {
      setDraw(true);
      setEndFight(true);
      updateUser();
    }

    if (CPUHealth <= 0) {
      setUserWins(true);
      setEndFight(true);
      updateUser();
    }
  }, [endUserTurn4]);

  return (
    <>
      <div style={{ background: themeStyles.ui, color: themeStyles.text }}>
        <div className="fight-header">
          <img
            className="fight-header-img"
            src="/poke_logo.png"
            alt=""
            style={{ background: themeStyles.ui, color: themeStyles.text }}
          />
        </div>
        <div
          className="fight-attacking-pokemon"
          style={{ background: themeStyles.ui, color: themeStyles.text }}
        >
          <div
            className={
              userTurnAnnouncement
                ? "fight-user-attack-show"
                : "fight-user-attack-hide"
            }
          >
            {fightPageUserPokemon && fightPageUserPokemon.name.english} is
            attacking!
          </div>
          <div
            className={
              CPUTurnAnnouncement
                ? "fight-CPU-attack-show"
                : "fight-CPU-attack-hide"
            }
          >
            {fightPageCPUPokemon && fightPageCPUPokemon.name.english} is
            attacking!
          </div>
        </div>
        <div
          className="fight-winner-announcement"
          style={{ background: themeStyles.ui, color: themeStyles.text }}
        >
          <div
            className={
              userWins ? "fight-user-wins-show" : "fight-user-wins-hide"
            }
          >
            You are the winner!
          </div>
          <div
            className={CPUWins ? "fight-CPU-wins-show" : "fight-CPU-wins-hide"}
          >
            Computer is the winner!
          </div>
          <div className={draw ? "fight-draw-show" : "fight-draw-hide"}>
            Both Pokemon are exhausted, the fight ends in a draw...
          </div>
        </div>
        <div
          className="fight-container"
          style={{ background: themeStyles.ui, color: themeStyles.text }}
        >
          <div
            style={{ background: themeStyles.bg, color: themeStyles.text }}
            className={
              userWins
                ? "fight-player-container-winner"
                : "fight-player-container"
            }
          >
            <div
              className={
                fightStatus
                  ? "fight-user-health-show-current-HP-heading"
                  : "fight-user-health-hide"
              }
            >
              {userHealth > 0 ? "Current Health:" : null}
            </div>
            <div className="fight-user-health-show-current-HP-div">
              <span className={CPUWins ? "CPUwins-show" : "CPUwins-hide"}>
                😵😵😵
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-user-health-show-current-HP"
                    : "fight-user-health-hide"
                }
              >
                {userHealth > 0 ? (
                  <progress
                    className="fight-bar-user"
                    value={userHealth}
                    max={fightPageUserPokemon.base.HP}
                  ></progress>
                ) : null}
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-user-health-show-current-HP"
                    : "fight-user-health-hide"
                }
              >
                {userHealth > 0 ? userHealth : null}
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-user-health-show-current-HP"
                    : "fight-user-health-hide"
                }
              >
                {userHealth > 0 ? "/" : null}
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-user-health-show-current-HP"
                    : "fight-user-health-hide"
                }
              >
                {userHealth > 0 ? fightPageUserPokemon.base.HP : null}
              </span>
            </div>
            <div
              className={
                fightStatus
                  ? "fight-user-health-show-current-HP"
                  : "fight-user-select"
              }
            >
              You have selected:
            </div>
            <div>
              <p className="fight-pokemon-name">
                {fightPageUserPokemon && fightPageUserPokemon.name.english}
              </p>
              <img
                className="Pokedex-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon}.png`}
                height="150px"
              />
              <p>
                Attack:{" "}
                {fightPageUserPokemon && fightPageUserPokemon.base.Attack}
              </p>
              <p>
                Defense:{" "}
                {fightPageUserPokemon && fightPageUserPokemon.base.Defense}
              </p>
              <p>HP: {fightPageUserPokemon && fightPageUserPokemon.base.HP}</p>
              <p>
                Speed: {fightPageUserPokemon && fightPageUserPokemon.base.Speed}
              </p>
            </div>
          </div>
          <div className="fight-x">x</div>
          <div
            style={{ background: themeStyles.bg, color: themeStyles.text }}
            className={
              CPUWins ? "fight-cpu-container-winner" : "fight-cpu-container"
            }
          >
            <div
              className={
                fightStatus
                  ? "fight-CPU-health-show-current-HP-heading"
                  : "fight-CPU-health-hide"
              }
            >
              {CPUHealth > 0 ? "Current Health:" : null}
            </div>
            <div
              className={
                fightStatus
                  ? "fight-CPU-health-show-current-HP-div"
                  : "fight-CPU-health-hide"
              }
            >
              <span className={userWins ? "userWins-show" : "userWins-hide"}>
                😵😵😵
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-CPU-health-show-current-HP"
                    : "fight-CPU-health-hide"
                }
              >
                {CPUHealth > 0 ? (
                  <progress
                    className="fight-bar-cpu"
                    value={CPUHealth}
                    max={fightPageCPUPokemon.base.HP}
                  ></progress>
                ) : null}
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-CPU-health-show-current-HP"
                    : "fight-CPU-health-hide"
                }
              >
                {CPUHealth > 0 ? CPUHealth : null}
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-CPU-health-show-current-HP"
                    : "fight-CPU-health-hide"
                }
              >
                {CPUHealth > 0 ? "/" : null}
              </span>
              <span
                className={
                  fightStatus
                    ? "fight-CPU-health-show-current-HP"
                    : "fight-CPU-health-hide"
                }
              >
                {CPUHealth > 0 ? fightPageCPUPokemon.base.HP : null}
              </span>
            </div>
            <div>Computer has selected:</div>
            <div>
              <p className="fight-pokemon-name">
                {fightPageCPUPokemon && fightPageCPUPokemon.name.english}
              </p>
              {fightPageCPUPokemon && (
                <img
                  className="Pokedex-image"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fightPageCPUPokemon.id}.png`}
                  height="150px"
                />
              )}
              <p>
                Attack: {fightPageCPUPokemon && fightPageCPUPokemon.base.Attack}
              </p>
              <p>
                Defense:{" "}
                {fightPageCPUPokemon && fightPageCPUPokemon.base.Defense}
              </p>
              <p>HP: {fightPageCPUPokemon && fightPageCPUPokemon.base.HP}</p>
              <p>
                Speed: {fightPageCPUPokemon && fightPageCPUPokemon.base.Speed}
              </p>
            </div>
          </div>
        </div>
        <div
          className="fight-lower-container"
          style={{ background: themeStyles.ui, color: themeStyles.text }}
        >
          <div
            className={fightStatus ? "fight-button-hide" : "fight-button-show"}
            onClick={() => {
              setFightStatus(true);
            }}
          >
            <p className="fight-fight-text">Fight!</p>
            <img src="pokeball.png" alt="" height="100px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fight;
