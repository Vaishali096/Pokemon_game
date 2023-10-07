import { useParams, useNavigate } from "react-router-dom";
export default function PokemonInfo({pokemons}){
    console.log(pokemons);
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(pokemons);
    const onePokemon = pokemons && pokemons.find((pokemon)=>pokemon.id ==(id));
    console.log(onePokemon);

    return(
        <>
        <h2>{onePokemon && onePokemon.name.english}</h2>
        <h4>{onePokemon && onePokemon.name.japanese}</h4>
        <h4>{onePokemon && onePokemon.name.english}</h4>
        <h4>{onePokemon && onePokemon.name.chinese}</h4>
        <h4>{onePokemon && onePokemon.name.french}</h4>
        <h6>{onePokemon && onePokemon.type}</h6>
        <p>{onePokemon && onePokemon.base.HP}</p>
        <p>{onePokemon && onePokemon.base.Attack}</p>
        <p>{onePokemon && onePokemon.base.Defense}</p>
    {/* <p>{onePokemon && onePokemon.base.Sp.Attack}</p> */}
    {/* <p>{onePokemon && onePokemon.base.Sp.Defense}</p> */}
        <p>{onePokemon && onePokemon.base.Speed}</p>
        <p>{onePokemon && onePokemon.__v}</p>
        </>
    );
}