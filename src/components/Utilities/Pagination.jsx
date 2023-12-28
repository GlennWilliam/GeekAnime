import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleGoToLastPage = () => {
    setPage(lastPage);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-xl text-color-primary">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="hover:text-color-accent transition-all"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="hover:text-color-accent transition-all"
        >
          Next
        </button>
      )}
      {page < lastPage && (
        <button
          onClick={handleGoToLastPage}
          className="hover:text-color-accent transition-all"
        >
          Go to Last Page
        </button>
      )}
    </div>
  );
};

export default Pagination;
