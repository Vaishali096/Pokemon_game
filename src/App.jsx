import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PokemonInfo from './Components/PokemonInfo';
import PokemonList from './Components/PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = async () => {
    const res = await fetch("https://pokefight-backend-cbka.onrender.com/pokemon");
    const data = await res.json();
    setPokemons(data);
  };

  useEffect(()=>{
    getPokemon();
  },[]);

console.log(pokemons);


  return (
    <>
<Routes>
  <Route path="/" element={<PokemonList pokemons={pokemons}/>}/>
  <Route path="/:id" element={<PokemonInfo pokemons={pokemons}/>}/>
</Routes>
    </>
  );
}

export default App;
