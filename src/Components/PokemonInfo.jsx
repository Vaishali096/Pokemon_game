import { useParams, useNavigate } from "react-router-dom";
import "./PokemonInfo.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

export default function PokemonInfo({ pokemons, setSelectedPokemon }) {
  const navigate = useNavigate();
  const { name } = useParams();

  const [show, setShow] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  const onePokemon =
    pokemons && pokemons.find((pokemon) => pokemon.name.english == name);

  const addNewUser = async () => {
    setSelectedPokemon(onePokemon.id);
    const response = await fetch(
      "https://pokefight-backend-cbka.onrender.com/game/user",
      {
        method: "POST",
        body: JSON.stringify({
          username: newUsername,
          score: 0,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
    const data = await response.json();
    console.log(data);

    setNewUsername("");
  };

  return (
    <>
      <div
        className="PokemonInfo-container"
        style={{ background: themeStyles.ui, color: themeStyles.text }}
      >
        <div className="logo_container">
          <img className="main_logo" src="/poke_logo.png" alt="logo" />
        </div>
        <Card
          className="text-center"
          style={{ background: themeStyles.bg, color: themeStyles.text }}
        >
          <Card.Body>
            <Card.Title className="PokemonInfo-pokemon-name">
              {onePokemon && onePokemon.name.english}
            </Card.Title>
            <Card.Text>
              {onePokemon && (
                <img
                  className="PokemonInfo-pokemon-img"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${onePokemon.id}.png`}
                />
              )}
              <p className="PokemonInfo-bold">Type:</p>
              <div className="PokemonInfo-pokemon-type">
                {onePokemon.type.map((type) => (
                  <div>{type}</div>
                ))}
              </div>
              <p>
                <span className="PokemonInfo-bold">HP: </span>{" "}
                {onePokemon && onePokemon.base.HP}
              </p>
              <p>
                <span className="PokemonInfo-bold">Attack: </span>{" "}
                {onePokemon && onePokemon.base.Attack}
              </p>
              <p>
                <span className="PokemonInfo-bold">Defense: </span>{" "}
                {onePokemon && onePokemon.base.Defense}
              </p>
              <p>
                <span className="PokemonInfo-bold">Speed: </span>{" "}
                {onePokemon && onePokemon.base.Speed}
              </p>
            </Card.Text>
            <Button variant="danger" onClick={handleShow}>
              Select this Pokemon and fight!
            </Button>
          </Card.Body>
        </Card>
        <Modal className="Pokemon-info-modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please enter your username:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="Pokemon-info-input"
              id="username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Add username here..."
            />{" "}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to="/fight">
              <Button variant="danger" onClick={addNewUser}>
                Go to fight!
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </div>

      {/* <div
        className="PokemonDetails"
        style={{ background: themeStyles.ui, color: themeStyles.text }}
      >
        <h3>Name</h3>
        {onePokemon && (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${onePokemon.id}.png`}
          />
        )}
        <p>{onePokemon && onePokemon.name.english}</p>
        <p>{onePokemon && onePokemon.name.japanese}</p>
        <p>{onePokemon && onePokemon.name.chinese}</p>
        <p>{onePokemon && onePokemon.name.french}</p>
        <h3>Type</h3>
        <p>{onePokemon && onePokemon.type}</p>
        <h3>Base</h3>
        <p>HP: {onePokemon && onePokemon.base.HP}</p>
        <p>Attack: {onePokemon && onePokemon.base.Attack}</p>
        <p>Defense: {onePokemon && onePokemon.base.Defense}</p>
        <p>Speed: {onePokemon && onePokemon.base.Speed}</p>
        <Link to="/fight">
          <button
            className="Pokemon-info-select-pokemon"
            onClick={() => {
              setSelectedPokemon(onePokemon.id);
            }}
          >
            Select this Pokemon and proceed to fight page!
          </button>
        </Link>
      </div> */}
    </>
  );
}
