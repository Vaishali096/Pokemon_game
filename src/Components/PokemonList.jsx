import { Link } from "react-router-dom";
import "./PokemonList.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PokemonList({ currentPosts }) {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  return (
    <>
      <div
        style={{
          background: themeStyles.ui,
          color: themeStyles.text,
        }}
      >
        <div className="logo_container">
          <img className="main_logo" src="/poke_logo.png" alt="logo" />
        </div>
        <h2>Choose your Pokemon to start a fight!</h2>

        <div
          className="PokemonList"
          style={{ background: themeStyles.ui, color: themeStyles.text }}
        >
          {currentPosts
            ? currentPosts.map((pokemon) => (
                <Card
                  style={{
                    width: "18rem",
                    background: themeStyles.bg,
                    color: themeStyles.text,
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  />
                  <Card.Body>
                    <Card.Title className="PokemonList-pokemon-name">
                      {pokemon.name.english}
                    </Card.Title>
                    <Link to={`/${pokemon.name.english}`}>
                      <Button variant="danger">Pokemon Info</Button>
                    </Link>
                  </Card.Body>
                </Card>

                // <div

                //   className="Pokemon"
                //   key={pokemon.id}
                // >

                //   <img
                //     src=
                //   />
                // </div>
              ))
            : "No pokemons to display"}
        </div>
      </div>
    </>
  );
}
