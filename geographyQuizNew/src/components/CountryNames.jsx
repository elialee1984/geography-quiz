import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CountryNames = () => {
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
                <div>
                  {`Capital: `}
                  {country.capital ? country.capital.join(", ") : "None"}
                </div>
                <div>
                  {`Region: `}
                  {country.region ? country.region : "No region"}
                  {country.subregion ? <span> ({country.subregion})</span> : ""}
                </div>
                <div>
                  {`Language(s): `}
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : "None"}
                </div>
                <div>
                  {`Demonym: `}
                  {country.demonyms ? country.demonyms.eng.m : "None"}
                </div>
                <div>
                  {`Currency: `}
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map(
                          (currency) => `${currency.name} (${currency.symbol})`
                        )
                        .join(", ")
                    : "None"}
                </div>
                <div>
                  {`Area: `}
                  {country.area
                    ? `${country.area.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })} sqm`
                    : "keine Angabe"}
                </div>
                <div>
                  {`Population: `}
                  {country.population
                    ? country.population.toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })
                    : "keine Angabe"}
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
                    "Keine Angabe"
                  )}
                </div>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default CountryNames;
