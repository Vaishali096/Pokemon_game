import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Pagination from './Pagination';
import PokemonList from './PokemonList';


const LandingPage = ({currentPosts, postsPerPage, setCurrentPage, currentPage, totalPosts})=> {

      return (
        <>
  <PokemonList currentPosts={currentPosts} />
  <Pagination totalPosts={totalPosts} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </>
);
}

export default LandingPage;