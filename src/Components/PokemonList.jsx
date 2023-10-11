import { Link } from "react-router-dom";
import "./PokemonList.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function PokemonList({ pokemons }) {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  return (
    <>
      <div
        className="PokemonList"
        style={{ background: themeStyles.ui, color: themeStyles.text }}
      >
        <h1>PokeFight</h1>
        <button
          style={{ background: themeStyles.ui, color: themeStyles.text }}
          onClick={toggleTheme}
        >
          {isLightTheme ? "🌙" : "💡"}{" "}
        </button>
        {pokemons
          ? pokemons.map((pokemon) => (
              <div
                style={{
                  background: themeStyles.bg,
                  color: themeStyles.text,
                }}
                className="Pokemon"
                key={pokemon.id}
              >
                <Link to={`/${pokemon.name.english}`}>
                  <h4
                    style={{
                      background: themeStyles.bg,
                      color: themeStyles.text,
                    }}
                  >
                    {pokemon.name.english}
                  </h4>
                </Link>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                />
              </div>
            ))
          : "No pokemons to display"}
      </div>
    </>
  );
}
