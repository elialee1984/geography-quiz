import React, { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = ({ setSearchParams }) => {
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value,
    };
    const queryString = createSearchParams(query);

    setSearchParams(query);
    navigate({
      pathname: "/countriesComplete",
      search: `?${queryString}`,
    });
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
