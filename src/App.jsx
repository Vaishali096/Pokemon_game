import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import axios from 'axios';
import Navbar from "./Components/Navbar";
import PokemonInfo from './Components/PokemonInfo';
import PokemonList from './Components/PokemonList';

function App() {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = async () => {
      const res = await axios.get("https://pokefight-backend-cbka.onrender.com/pokemon");
      console.log(res);
      setPokemons(res.data);
    };

    useEffect(()=>{
      getPokemon();
    },[]);
  
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
