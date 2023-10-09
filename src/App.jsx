import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PokemonInfo from './Components/PokemonInfo';
import PokemonList from './Components/PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokes, setPokes] = useState([]);

  const getPokemon = async () => {
    const res = await fetch("https://pokefight-backend-cbka.onrender.com/pokemon");
    const data = await res.json();
    setPokemons(data);
  };

  const getPokes = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    console.log(data);
    setPokes(data.results);
  };

  useEffect(()=>{
    getPokemon();
    getPokes();
  },[]);

console.log(pokemons);
console.log(pokes);


  return (
    <>
    {/* <h1>{pokes.sprites.other.dream_world.front_default}</h1> */}

<Routes>
  <Route path="/" element={<PokemonList pokemons={pokemons} pokes={pokes}/>}/>
  <Route path="/:id" element={<PokemonInfo pokemons={pokemons} pokes={pokes}/>}/>
</Routes>
    </>
  );
}

export default App;
