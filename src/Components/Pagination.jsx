import "./Pagination.css"

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage })=>{
    let pages = [];
    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }
const amountOfPages = pages.length;

let selectedPages = [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2];
console.log(selectedPages)
  
const handleNextBtn = ()=>{
    setCurrentPage((prev)=> prev + 1);
}

    return (
        <>
        <div className="Pagination">
            <button disabled = {currentPage===1? true: false}onClick = {()=>setCurrentPage((prev)=> prev - 1)}>Prev</button>
            {selectedPages.map((page, index) => {
                    return page > 0 && page <= amountOfPages? (<button className= {page===currentPage?"highlightedPg":""} key={index} onClick={()=>setCurrentPage(page)}>{page}</button>):(<></>);
                })}
            <button disabled = {currentPage=== amountOfPages? true: false} onClick={handleNextBtn}>Next</button>
                </div>
        </>
    );
};
export default Pagination;