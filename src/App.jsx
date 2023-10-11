import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import Navbar from "./Components/Navbar";
import PokemonInfo from './Components/PokemonInfo';
import PokemonList from './Components/PokemonList';
import Ranking from './Components/Ranking';


function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = async () => {
    const res = await axios.get("https://pokefight-backend-cbka.onrender.com/pokemon");
    console.log(res);
    setPokemons(res.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} />} />
        <Route path="/:name" element={<PokemonInfo pokemons={pokemons} />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>

    </>
  );
}

export default App;
