import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    setPokemons(data.results);
  };

  useEffect(()=>{
    getPokemon();
  },[]);

  console.log(pokemons);


  return (
    <>
    <h1>Pokemons</h1>
    {pokemons
        ? pokemons.map((pokemon) => (
            <div key={pokemon.name}>
              <h2>{pokemon.name}</h2>
              <img src="{pokemon.sprites.front_default}" alt="" />
            </div>
          ))
        : "No pokemons to display"}
    </>
  );
}

export default App;
