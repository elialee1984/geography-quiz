import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CountryCapitals from "./CountryCapitals";
import CountryCarsSideOfRoad from "./CountryCarsSideOfRoad";
import CountryCurrencies from "./CountryCurrencies";
import CountryDemonyms from "./CountryDemonyms";
import CountryLandArea from "./CountryLandArea";
import CountryLanguages from "./CountryLanguages";
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
                <div>
                  {country.flag} {}
                  <u>
                    <strong>{country.name.common}</strong>
                  </u>
                  {country.name.common !== country.name.official && (
                    <span>
                      {" "}
                      (official name: <i>{country.name.official}</i>)
                    </span>
                  )}
                  {country.cca3 ? <strong> [{country.cca3}]</strong> : ""}
                </div>
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
                <div>
                  {country.maps.googleMaps ? (
                    <a
                      href={country.maps.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps
                    </a>
                  ) : (
                    "no data"
                  )}
                </div>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default CountryCard;
