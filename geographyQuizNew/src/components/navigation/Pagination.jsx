import React from "react";

const Pagination = ({
  currentPageState,
  setCurrentPageState,
  countries,
  countriesPerPage,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => setCurrentPageState(1)}
          disabled={currentPageState === 1}
        >
          First page
        </button>
        <button
          onClick={() => setCurrentPageState((prev) => Math.max(prev - 5, 1))}
          disabled={currentPageState <= 5}
        >
          -5
        </button>
        <button
          onClick={() => setCurrentPageState((prev) => Math.max(prev - 1, 1))}
          disabled={currentPageState === 1}
        >
          -1
        </button>
        <button
          onClick={() =>
            setCurrentPageState((prev) =>
              Math.min(prev + 1, Math.ceil(countries.length / countriesPerPage))
            )
          }
          disabled={
            currentPageState >= Math.ceil(countries.length / countriesPerPage)
          }
        >
          +1
        </button>
        <button
          onClick={() =>
            setCurrentPageState((prev) =>
              Math.min(prev + 5, Math.ceil(countries.length / countriesPerPage))
            )
          }
          disabled={
            currentPageState >=
            Math.ceil(countries.length / countriesPerPage - 4)
          }
        >
          +5
        </button>
        <button
          onClick={() =>
            setCurrentPageState(Math.ceil(countries.length / countriesPerPage))
          }
          disabled={
            currentPageState === Math.ceil(countries.length / countriesPerPage)
          }
        >
          Last page
        </button>
      </div>
    </div>
  );
};

export default Pagination;

/*
<div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => setCurrentPageState(1)}
          disabled={currentPageState === 1}
        >
          First page
        </button>
        <button
          onClick={() => setCurrentPageState((prev) => Math.max(prev - 5, 1))}
          disabled={currentPageState <= 5}
        >
          -5
        </button>
        <button
          onClick={() => setCurrentPageState((prev) => Math.max(prev - 1, 1))}
          disabled={currentPageState === 1}
        >
          -1
        </button>
        <button
          onClick={() =>
            setCurrentPageState((prev) =>
              Math.min(prev + 1, Math.ceil(countries.length / countriesPerPage))
            )
          }
          disabled={
            currentPageState >= Math.ceil(countries.length / countriesPerPage)
          }
        >
          +1
        </button>
        <button
          onClick={() =>
            setCurrentPageState((prev) =>
              Math.min(prev + 5, Math.ceil(countries.length / countriesPerPage))
            )
          }
          disabled={
            currentPageState >=
            Math.ceil(countries.length / countriesPerPage - 4)
          }
        >
          +5
        </button>
        <button
          onClick={() =>
            setCurrentPageState(Math.ceil(countries.length / countriesPerPage))
          }
          disabled={
            currentPageState === Math.ceil(countries.length / countriesPerPage)
          }
        >
          Last page
        </button>
      </div>
*/
