// import { useState, useEffect } from 'react';

// const Pagination = ({ totalPosts, postsPerPage, setCurrentPage })=>{
//     const[pageNoLimit, setPageNoLimit] = useState(15);
//     const[maxPageNoLimit, setMaxPageNoLimit] = useState(8);
//     const[minPageNoLimit, setMinPageNoLimit] = useState(1);
//     const[arrOfCurrentButtons, setArrOfCurrentButtons] = useState([]);


//     // const handleClick = (event)=>{
//     //     setCurrentPage(Number(event.target.id));
//     // };

//     let pages = [];
//     for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
//         pages.push(i);
//     }

//     // const renderPageNumbers = pages.map((number)=>{
//     //     if(number < maxPageNoLimit+1 && number>minPageNoLimit){
//     //         return(
//     //             <div className='pageNo' key={number}
//     //             //  id={number}
//     //             //  onClick={setCurrentPage == number? "active: null"}
//     //             >
//     //             {number}
//     //             </div>
//     //         );
//     //     }else {
//     //         return null;
//     //     }
//     // });

    
// useEffect(()=>{
// let tempNoOfPages = [...pages];
// tempNoOfPages = tempNoOfPages.slice(0,15);
// setArrOfCurrentButtons(tempNoOfPages);
//     handleNextBtn();
//   },[setCurrentPage]);

// const handleNextBtn = ()=>{
//     setCurrentPage((prev)=> prev===1? prev: prev - 1);
//     if(setCurrentPage+1> maxPageNoLimit){
//         setMaxPageNoLimit(maxPageNoLimit+ postsPerPage);
//         setMinPageNoLimit(minPageNoLimit+ postsPerPage);
//       }
//   };

//     return (
//         <>

//         <div>
//             <button onClick = {()=>setCurrentPage((prev)=> prev===1? prev: prev - 1)}>Prev</button>
//             {arrOfCurrentButtons.map((page, index) => {
//                     return <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>;
//                 })}
//             {/* <button onClick = {()=>setCurrentPage((prev)=> prev === pages.length? prev: prev + 1)}>Next</button> */}
//             <button onClick={handleNextBtn}>Next</button>
//                 </div>
//         // <>
//         // <button>Prev</button>

//         // <li>{renderPageNumbers}</li>

//         // <button>Next</button>
//         // </>

//     <>

//     </>


//         </>
//     );
// };
// export default Pagination;