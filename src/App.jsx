import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Navbar from "./Components/Navbar";
import PokemonInfo from "./Components/PokemonInfo";
import Fight from "./Components/Fight";
import Ranking from "./Components/Ranking";
import LandingPage from "./Components/LandingPage";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [newUsername, setNewUsername] = useState("");

  const getPokemon = async () => {
    const res = await axios.get(
      "https://pokefight-backend-cbka.onrender.com/pokemon",
      {
        params: { page: currentPage },
      }
    );
    console.log(res);
    setPokemons(res.data);
  };

  useEffect(() => {
    getPokemon();
  }, [currentPage]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              totalPosts={pokemons.length}
              currentPosts={currentPosts}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          }
        />
        <Route
          path="/:name"
          element={
            <PokemonInfo
              pokemons={pokemons}
              setSelectedPokemon={setSelectedPokemon}
              newUsername={newUsername}
              setNewUsername={setNewUsername}
            />
          }
        />
        <Route
          path="/fight"
          element={
            <Fight
              selectedPokemon={selectedPokemon}
              newUsername={newUsername}
            />
          }
        />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </>
  );
}

export default App;
