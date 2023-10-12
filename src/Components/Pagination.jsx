import { useState, useEffect } from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage })=>{
    const[pageNoLimit, setPageNoLimit] = useState(0);
    const[maxPageNoLimit, setMaxPageNoLimit] = useState(15);
    const[minPageNoLimit, setMinPageNoLimit] = useState(1);



    let pages = [];
    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }
  
useEffect(()=>{
    handleNextBtn();
  },[setCurrentPage]);

const handleNextBtn = ()=>{
    setCurrentPage((prev)=> prev===1? prev: prev + 1);
    if(setCurrentPage+1> maxPageNoLimit){
        setMaxPageNoLimit(maxPageNoLimit+ postsPerPage);
        setMinPageNoLimit(minPageNoLimit+ postsPerPage);
      }
  };

    return (
        <>
        <div>
            <button onClick = {()=>setCurrentPage((prev)=> prev===1? prev: prev - 1)}>Prev</button>
            {pages.map((page, index) => {
                    return <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>;
                })}
            {/* <button onClick = {()=>setCurrentPage((prev)=> prev === pages.length? prev: prev + 1)}>Next</button> */}
            <button onClick={handleNextBtn}>Next</button>
                </div>
        </>
    );
};
export default Pagination;