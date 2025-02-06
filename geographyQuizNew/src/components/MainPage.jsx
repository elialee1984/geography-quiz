import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>MainPage</div>
      <button type="button" onClick={() => navigate("/countriesComplete")}>
        All Countries
      </button>
    </>
  );
};

export default MainPage;
