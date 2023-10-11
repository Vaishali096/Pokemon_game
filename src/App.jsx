import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import axios from "axios";
import Navbar from "./Components/Navbar";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonList from "./Components/PokemonList";
import Fight from "./Components/Fight";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const getPokemon = async () => {
    const res = await axios.get(
      "https://pokefight-backend-cbka.onrender.com/pokemon"
    );
    console.log(res);
    setPokemons(res.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} />} />
        <Route
          path="/:name"
          element={
            <PokemonInfo
              pokemons={pokemons}
              setSelectedPokemon={setSelectedPokemon}
            />
          }
        />
        <Route
          path="/fight"
          element={<Fight selectedPokemon={selectedPokemon} />}
        />
      </Routes>
    </>
  );
}

export default App;
