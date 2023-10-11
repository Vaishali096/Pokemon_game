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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  const onePokemon =
    pokemons && pokemons.find((pokemon) => pokemon.name.english == name);

  return (
    <>
      <div style={{ background: themeStyles.ui, color: themeStyles.text }}>
        <Card
          className="text-center"
          style={{ background: themeStyles.bg, color: themeStyles.text }}
        >
          <Card.Body>
            <Card.Title>{onePokemon && onePokemon.name.english}</Card.Title>
            <Card.Text>
              {onePokemon && (
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${onePokemon.id}.png`}
                />
              )}
              <h3>Type</h3>
              <p>{onePokemon && onePokemon.type}</p>
              <p>HP: {onePokemon && onePokemon.base.HP}</p>
              <p>Attack: {onePokemon && onePokemon.base.Attack}</p>
              <p>Defense: {onePokemon && onePokemon.base.Defense}</p>
              <p>Speed: {onePokemon && onePokemon.base.Speed}</p>
            </Card.Text>
            <Button variant="danger" onClick={handleShow}>
              Select this Pokemon and fight!
            </Button>
          </Card.Body>
        </Card>
        <Modal
          show={show}
          onHide={handleClose}
          style={{ background: themeStyles.ui, color: themeStyles.text }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Please enter your username:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to="/fight">
              <Button
                variant="danger"
                onClick={setSelectedPokemon(onePokemon.id)}
              >
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
