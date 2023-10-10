import { useParams, useNavigate } from "react-router-dom";
import './PokemonInfo.css';

export default function PokemonInfo({ pokemons}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const onePokemon = pokemons && pokemons.find((pokemon)=>pokemon.id ==(id));
    const onePokemon = pokemons && pokemons.find((pokemon) => pokemon.id == (id));

    return (
        <div className="PokemonDetails">

        <h3>Name</h3>
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
        <p>V: {onePokemon && onePokemon.__v}</p>
        </div>
    );
}