import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import CountryCapitals from "./CountryCapitals";
import CountryCurrencies from "./CountryCurrencies";
import CountryDemonyms from "./CountryDemonyms";
import CountryFlag from "./CountryFlag";
import CountryGoogleMapsLink from "./CountryGoogleMapsLink";
import CountryLandArea from "./CountryLandArea";
import CountryLanguages from "./CountryLanguages";
import CountryName from "./CountryName";
import CountryPopulation from "./CountryPopulation";
import CountryRegions from "./CountryRegions";
import CountrySharedBorders from "./CountrySharedBorders";
import CountryStartOfWeek from "./CountryStartOfWeek";
import CountryStatusCarsSideOfRoad from "./CountryStatusCarsSideOfRoad";
import CountryStatusIndependent from "./CountryStatusIndependent";
import CountryStatusLandlocked from "./CountryStatusLandlocked";
import CountryTimezones from "./CountryTimeZones";
import CountryTopLevelDomain from "./CountryTopLevelDomain";
import Filter from "./navigation/filter/Filter";
import Pagination from "./navigation/Pagination";
import Search from "./navigation/Search";

const CountryCard = ({ currentPage, countriesPerPage }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showIndependent, setShowIndependent] = useState(false);
  const [showNonIndependent, setShowNonIndependent] = useState(false);
  const [showLandlocked, setShowLandlocked] = useState(false);
  const [showNonLandlocked, setShowNonLandlocked] = useState(false);
  const [showLeftSide, setShowLeftSide] = useState(false);
  const [showRightSide, setShowRightSide] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedData);
        setFilteredCountries(sortedData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const indexOfLastCountry = currentPageState * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const filteringCountries = countries.filter((country) => {
      const isIndependent = showIndependent ? country.independent : true;
      const isNotIndependent = showNonIndependent ? !country.independent : true;
      const isLandlocked = showLandlocked ? country.landlocked : true;
      const isNotLandlocked = showNonLandlocked ? !country.landlocked : true;
      const rightSide = showRightSide ? country.car.side === "right" : true;
      const leftSide = showLeftSide ? country.car.side === "left" : true;

      return (
        isIndependent &&
        isNotIndependent &&
        isLandlocked &&
        isNotLandlocked &&
        rightSide &&
        leftSide
      );
    });

    setCurrentCountries(
      filteringCountries.slice(indexOfFirstCountry, indexOfLastCountry)
    );
    setFilteredCountries(filteringCountries);
  }, [
    countries,
    currentPageState,
    countriesPerPage,
    searchParams,
    showIndependent,
    showNonIndependent,
    showLandlocked,
    showNonLandlocked,
    showRightSide,
    showLeftSide,
  ]);

  const handleFilterChange = () => {
    const maxPage = Math.ceil(filteredCountries.length / countriesPerPage);
    if (currentPageState > maxPage) {
      setCurrentPageState(maxPage);
    } 
  };

  useEffect(() => {
    const maxPage = Math.max(1, Math.ceil(filteredCountries.length / countriesPerPage));
    if (currentPageState > maxPage) {
      setCurrentPageState(maxPage);
    }else if (currentPageState < 1) {
      setCurrentPageState(1);
    }
  }, [filteredCountries, countriesPerPage]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <button type="button" onClick={() => navigate("/")}>
          Back to main page
        </button>
      </div>
      <Pagination
        currentPageState={currentPageState}
        setCurrentPageState={setCurrentPageState}
        countriesPerPage={countriesPerPage}
        filteredCountries={filteredCountries}
      />
      <Search setSearchParams={setSearchParams} />
      <Filter
        showIndependent={showIndependent}
        setShowIndependent={setShowIndependent}
        showLandlocked={showLandlocked}
        setShowLandlocked={setShowLandlocked}
        showNonLandlocked={showNonLandlocked}
        setShowNonLandlocked={setShowNonLandlocked}
        showNonIndependent={showNonIndependent}
        setShowNonIndependent={setShowNonIndependent}
        showRightSide={showRightSide}
        setShowRightSide={setShowRightSide}
        showLeftSide={showLeftSide}
        setShowLeftSide={setShowLeftSide}
        onFilterChange={handleFilterChange}
      />{" "}
      <br />
      {currentCountries.map((country, index) => (
        <div
          key={country.name.common}
          style={{
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <strong>
                {(currentPageState - 1) * countriesPerPage + index + 1}.
              </strong>
              <CountryName country={country} />
            </span>
            <CountryCapitals country={country} />
            <CountryDemonyms country={country} />
            <CountryRegions country={country} />
            <CountryTimezones country={country} />
            <CountryStartOfWeek country={country} />
            <CountryLanguages country={country} />
            <CountryCurrencies country={country} />
            <CountryLandArea country={country} />
            <CountryPopulation country={country} />
            <CountryTopLevelDomain country={country} />
            <CountryStatusIndependent country={country} />
            <CountryStatusLandlocked country={country} />
            <CountrySharedBorders country={country} />
            <CountryStatusCarsSideOfRoad country={country} />
            <CountryGoogleMapsLink country={country} />
            <CountryFlag country={country} />
          </div>
        </div>
      ))}
      <Pagination
        currentPageState={currentPageState}
        setCurrentPageState={setCurrentPageState}
        countriesPerPage={countriesPerPage}
        filteredCountries={filteredCountries}
      />
    </div>
  );
};

export default CountryCard;
