import { useParams, useNavigate } from "react-router-dom";
import "./PokemonInfo.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function PokemonInfo({ pokemons, setSelectedPokemon }) {
  const navigate = useNavigate();
  const { name } = useParams();

  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  const onePokemon =
    pokemons && pokemons.find((pokemon) => pokemon.name.english == name);

  return (
    <>
    <div
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
    </div>
    </>
  );
}
