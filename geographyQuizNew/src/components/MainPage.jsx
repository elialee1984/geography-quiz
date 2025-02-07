import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>MainPage</div>
      <button type="button" onClick={() => navigate("/countriesComplete")}>
        All Countries
      </button>{" "}
      <br />
      <button type="button" onClick={() => navigate("/")}>
      TO DO:
      </button>{" "}
      <br />
      <button type="button" onClick={() => navigate("/")}>
        <div>Filter by</div>
        <ul>
          <li>... continent and/or region</li>
          <li>... status of independence</li>
          <li>... status of being landlocked</li>
          <li>... status of side of the road</li>
        </ul>
      </button>{" "}
      <br />
      <button type="button" onClick={() => navigate("/")}>
        <div>Quizzes</div>
        <ul>
          <li>... capitals</li>
          <li>... languages</li>
          <li>... currencies</li>
          <li>... demonyms</li>
          <li>... flags</li>
          <li>different difficulties</li>
          <li>combination of above quizzes</li>
        </ul>
      </button>{" "}
      <br />
      <button type="button" onClick={() => navigate("/")}>
        <div>Nice to have</div>
        <ul>
          <li>country shapes</li>
          <li>include maps</li>
        </ul>
      </button>
    </>
  );
};

export default MainPage;
