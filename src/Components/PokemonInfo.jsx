import { useParams, useNavigate } from "react-router-dom";
import './PokemonInfo.css';

export default function PokemonInfo({ pokemons }) {
    const navigate = useNavigate();
    const { name } = useParams();

    const onePokemon = pokemons && pokemons.find((pokemon) => pokemon.name.english == (name));

    return (
        <>
        <div className="logo_container" >
          <img className="main_logo_info" src="/poke_logo.png" alt="logo" />
        </div>
            <div className="card">
                {onePokemon && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${onePokemon.id}.png`} class="card-img-top" alt="poke_card" />}
                
                <h3 className="card-body">{onePokemon && onePokemon.name.english}</h3>
                <h5>Type</h5>
                <p>{onePokemon && onePokemon.type}</p>
                <h5>Base</h5>
                <p>HP: {onePokemon && onePokemon.base.HP}</p>
                <p>Attack: {onePokemon && onePokemon.base.Attack}</p>
                <p>Defense: {onePokemon && onePokemon.base.Defense}</p>
                <p>Speed: {onePokemon && onePokemon.base.Speed}</p>

                <button type="button" class="btn btn-success">Select Pokemon</button>

                <button type="button" class="btn btn-secondary">Home</button>
            </div>
        </>
    );
}