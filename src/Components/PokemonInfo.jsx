import { useParams, useNavigate } from "react-router-dom";
export default function PokemonInfo({pokemons, pokes}){
    console.log(pokemons);
    console.log(pokes);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(pokemons);
    const onePoke = pokes && pokes.find((poke)=>poke.name ==(id));
    const onePokemon = pokemons && pokemons.find((pokemon)=>pokemon.id ==(id));
    console.log(onePokemon);

    return(
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
    {/* <p>{onePokemon && onePokemon.base.Sp.Attack}</p> */}
    {/* <p>{onePokemon && onePokemon.base.Sp.Defense}</p> */}
        <p>Speed: {onePokemon && onePokemon.base.Speed}</p>
        <p>V: {onePokemon && onePokemon.__v}</p>
        <h2>{onePoke && onePoke.poke.sprites.other.dream_world.front_default}</h2>
        </div>
    );
}