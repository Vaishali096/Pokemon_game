import { Link } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";
export default function PokemonList({pokemons}) {
      console.log(pokemons);

    return(
    <div>
    <h1>Pokemons</h1>
    { pokemons
        ? pokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <Link to={`/${pokemon.id}`}><h4>{pokemon.name.english}</h4></Link>
              <img src="{pokemon.sprites.front_default}" alt="image" />
            </div>
          ))
        : "No pokemons to display"}
        </div>
    );
}