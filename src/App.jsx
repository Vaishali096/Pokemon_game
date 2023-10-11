import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Navbar from "./Components/Navbar";
import PokemonInfo from './Components/PokemonInfo';
import PokemonList from './Components/PokemonList';
// import Pagination from './Components/Pagination';

function App() {
    const [pokemons, setPokemons] = useState([]);
    const[currentPage, setCurrentPage] = useState(0);
    const[totalPages, setTotalPages] = useState(0);

    // const[postsPerPage, setPostsPerPage]= useState(0);
    // const[arrOfCurrentButtons, setArrOfCurrentButtons] = useState([]);


    const getPokemon = async () => {
      const res = await axios.get("https://pokefight-backend-cbka.onrender.com/pokemon",
      {
        params:{page: currentPage},
      });
      console.log(res);
      setPokemons(res.data);
    };

    useEffect(()=>{
      getPokemon();
    },[currentPage]);

    // const lastPostIndex = currentPage * postsPerPage;
    // const firstPostIndex = lastPostIndex - postsPerPage;
    // const currentPosts = pokemons.slice(firstPostIndex, lastPostIndex);

    const handlePageChange = event =>{
      console.log(event);
      setCurrentPage(event.selected);
    }

  return (
    <>
    <Routes>
    <Route path="/" element={<PokemonList pokemons={pokemons}/>}/>
      <Route path="/:name" element={<PokemonInfo pokemons={pokemons}/>}/>
    </Routes>
    {/* <div>
    <Pagination totalPosts={pokemons.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
    </div> */}

    <>
<ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        breakLabel="..."
        forcePage={currentPage}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className="pagination"
        activeClassName="active-page"
        previousClassName="previous-page"
        nextClassName="next-page"
/>
    </>
    </>
  );
}

export default App;
