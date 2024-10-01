import React from "react";
import "./Pagination.css";

const PaginationExample = ({ currentPage = 1, totalPages, onPageChange }) => {
  const createPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination my-[50px]">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-l-full"
      >
        {/* &laquo; */}
        Previous
      </button>

      {createPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-r-full"
      >
        {/* &raquo; */}
        Next
      </button>
    </div>
  );
};

export default PaginationExample;
