import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CountryCapitals from "./CountryCapitals.jsx";
import CountryDemonyms from "./CountryDemonyms.jsx";
import CountryRegions from "./CountryRegions.jsx";
import CountryTimezones from "./CountryTimeZones.jsx";

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
                <div>
                  {`Start of the Week: `}
                  {country.startOfWeek
                    ? country.startOfWeek.charAt(0).toUpperCase() +
                      country.startOfWeek.slice(1)
                    : "no data"}
                </div>
                <div>
                  {`Language(s): `}
                  <ul>
                    {country.languages
                      ? Object.values(country.languages).map(
                          (language, index) => <li key={index}>{language}</li>
                        )
                      : "None"}
                  </ul>
                </div>
                <div>
                  {`Currency: `}
                  <ul>
                    {country.currencies
                      ? Object.values(country.currencies).map(
                          (currency, index) => (
                            <li key={index}>
                              {currency.name} ({currency.symbol})
                            </li>
                          )
                        )
                      : "None"}
                  </ul>
                </div>
                <div>
                  {`Area: `}
                  {country.area
                    ? `${country.area.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })} sq km (${(country.area * 0.386102).toLocaleString(
                        "en-US",
                        {
                          maximumFractionDigits: 0,
                        }
                      )} sq mi)`
                    : "no data"}
                </div>
                <div>
                  {`Population: `}
                  {country.population
                    ? country.population.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })
                    : "no data"}
                </div>
                <div>
                  {`Top-level domain: `}
                  {country.tld ? country.tld.join(", ") : "No tld"}
                </div>
                <div>
                  {`Independent: `}
                  {country.independent ? (
                    <span style={{ color: "green" }}>yes</span>
                  ) : (
                    <span style={{ color: "red" }}>no</span>
                  )}
                </div>
                <div>
                  {`Landlocked: `}
                  {country.landlocked ? (
                    <span style={{ color: "green" }}>yes</span>
                  ) : (
                    <span style={{ color: "red" }}>no</span>
                  )}
                </div>
                <div>
                  {`Shares borders with `}
                  {country.borders
                    ? country.borders.join(", ")
                    : "no other country"}
                  .
                </div>
                <div>
                  {country.car.side ? (
                    <span>
                      Car drives on the{" "}
                      <span
                        style={{
                          color:
                            country.car.side === "right"
                              ? "lightblue"
                              : "orange",
                        }}
                      >
                        <strong>{country.car.side.toUpperCase()}</strong>
                      </span>{" "}
                      side of the road.
                    </span>
                  ) : (
                    "no data"
                  )}
                </div>
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
