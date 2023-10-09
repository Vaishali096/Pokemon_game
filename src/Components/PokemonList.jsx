import { Link } from "react-router-dom";
export default function PokemonList({pokemons}) {
      console.log(pokemons);

    return(
      <>
    <div className="PokemonList">
        <h1>PokeFight</h1>
    { pokemons
        ? pokemons.map((pokemon) => (
            <div className="Pokemon" key={pokemon.id}>
              <Link to={`/${pokemon.id}`}><h4>{pokemon.name.english}</h4></Link>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
            </div>
          ))
        : "No pokemons to display"}
        </div>
        </>
    );
}