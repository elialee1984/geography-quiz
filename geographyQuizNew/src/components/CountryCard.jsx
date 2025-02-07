import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CountryCapitals from "./CountryCapitals";
import CountryCurrencies from "./CountryCurrencies";
import CountryDemonyms from "./CountryDemonyms";
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
import Pagination from "./navigation/Pagination";

const CountryCard = ({ currentPage, countriesPerPage }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);
  const [currentPageState, setCurrentPageState] = useState(currentPage);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const indexOfLastCountry = currentPageState * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    setCurrentCountries(
      countries.slice(indexOfFirstCountry, indexOfLastCountry)
    );
  }, [countries, currentPageState, countriesPerPage]);

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
        countries={countries}
        countriesPerPage={countriesPerPage}
      />

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
            <CountryDemonyms country={country} />
            <CountryCapitals country={country} />
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryCard;
