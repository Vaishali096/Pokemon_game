import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
// import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Navbar from "./Components/Navbar";
import PokemonInfo from './Components/PokemonInfo';
import PokemonList from './Components/PokemonList';
import Pagination from './Components/Pagination';

function App() {
    const [pokemons, setPokemons] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage]= useState(8);


    const getPokemon = async () => {
      const res = await axios.get("https://pokefight-backend-cbka.onrender.com/pokemon");
      console.log(res);
      setPokemons(res.data);
    };

    useEffect(()=>{
      getPokemon();
    },[currentPage]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);


  return (
    <>
    <Routes>
    <Route path="/" element={<PokemonList pokemons={currentPosts}/>}/>
      <Route path="/:name" element={<PokemonInfo pokemons={pokemons}/>}/>
    </Routes>
    <div>
    <Pagination totalPosts={pokemons.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
    </>
  );
}

export default App;
