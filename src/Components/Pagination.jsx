import "./Pagination.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const amountOfPages = pages.length;

  let selectedPages = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
  console.log(selectedPages);

  const handleNextBtn = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div
        className="Pagination"
        style={{ background: themeStyles.ui, color: themeStyles.text }}
      >
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          style={{ background: themeStyles.bg, color: themeStyles.text }}
        >
          Prev
        </button>
        {selectedPages.map((page, index) => {
          return page > 0 && page <= amountOfPages ? (
            <button
              className={page === currentPage ? "highlightedPg" : ""}
              key={index}
              onClick={() => setCurrentPage(page)}
              style={{ background: themeStyles.bg, color: themeStyles.text }}
            >
              {page}
            </button>
          ) : (
            <></>
          );
        })}
        <button
          disabled={currentPage === amountOfPages ? true : false}
          onClick={handleNextBtn}
          style={{ background: themeStyles.bg, color: themeStyles.text }}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Pagination;
