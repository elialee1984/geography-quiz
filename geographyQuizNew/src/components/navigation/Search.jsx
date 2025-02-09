import React, { useRef } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Search = () => {
  const searchInputRef = useRef();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current.value,
    };
    const queryString = createSearchParams(query);

    navigate({
      pathname: "/countriesComplete",
      search: `?${queryString}`,
    });
  };

  const onClickHandler = (e) => {
    if (e.target.name === "clearSearch") {
      searchInputRef.current.value = "";
      setSearchParams({});
    }
  };

  return (
    <form onSubmit={onSearchHandler} onClick={onClickHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
      <button type="button" name="clearSearch" className="clear-search-button">
        Clear Search
      </button>
    </form>
  );
};

export default Search;
