import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CountryCapitals from "./CountryCapitals";
import CountryCarsSideOfRoad from "./CountryCarsSideOfRoad";
import CountryCurrencies from "./CountryCurrencies";
import CountryDemonyms from "./CountryDemonyms";
import CountryGoogleMapsLink from "./CountryGoogleMapsLink";
import CountryLandArea from "./CountryLandArea";
import CountryLanguages from "./CountryLanguages";
import CountryNames from "./CountryNames";
import CountryPopulation from "./CountryPopulation";
import CountryRegions from "./CountryRegions";
import CountrySharedBorders from "./CountrySharedBorders";
import CountryStartOfWeek from "./CountryStartOfWeek";
import CountryStatusIndependent from "./CountryStatusIndependent";
import CountryStatusLandlocked from "./CountryStatusLandlocked";
import CountryTimezones from "./CountryTimeZones";
import CountryTopLevelDomain from "./CountryTopLevelDomain";

const CountryCard = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState("");

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

  return (
    <div>
      <button type="button" onClick={() => navigate("/")}>
        Back to main page
      </button>
      <ol>
        {countries &&
          countries.map((country) => (
            <li key={country.name.common} style={{ marginBottom: "1.5rem" }}>
              <div>
                <CountryNames country={country} />
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
                <CountryCarsSideOfRoad country={country} />
                <CountryGoogleMapsLink country={country} />
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default CountryCard;
