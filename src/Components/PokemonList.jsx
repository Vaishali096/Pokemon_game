import { Link } from "react-router-dom";
import './PokemonList.css';

export default function PokemonList({ pokemons }) {
  return (
    <>
      <div className="logo_container" >
        <img className="main_logo" src="/poke_logo.png" alt="logo" />
      </div>
      <h2>Choose your Pokemon to start a fight!</h2>

      <div className="card-deck">
        {pokemons
          ? pokemons.map((pokemon) => (
            <div className="Pokemon" key={pokemon.id}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
              <Link to={`/${pokemon.name.english}`} className="list_link"><h4>{pokemon.name.english}</h4></Link>
            </div>
          ))
          : "No pokemons to display"}
      </div>
    </>
  );
}