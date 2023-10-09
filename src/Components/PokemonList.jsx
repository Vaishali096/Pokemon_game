import { Link } from "react-router-dom";
import './PokemonList.css';
export default function PokemonList({pokemons, pokes}) {
      console.log(pokemons);
      console.log(pokes);

    return(
      <>
    <div className="PokemonList">
    { pokemons
        ? pokemons.map((pokemon) => (
            <div className="Pokemon" key={pokemon.id}>
              <img src="{pokemon.sprites.front_default}" alt="image" />
              <Link to={`/${pokemon.id}`}><h4>{pokemon.name.english}</h4></Link>
            </div>
          ))
        : "No pokemons to display"}
        </div>
        <div>
              {pokes
        ? pokes.map((poke) => (
            <div key={poke.name}>
        <Link to={`/${poke.id}`}>
        <img src="{poke.sprites.other.dream_world.front_default}" alt="image" />
        </Link>
        <h4>{poke.name}</h4>
            </div>
          ))
        : "No pokes to display"}
        </div>
        </>
    );
}