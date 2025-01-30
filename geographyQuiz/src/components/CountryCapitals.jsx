import React, { useEffect, useState } from "react";

const CountryNames = () => {
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
      <ol>
        {countries &&
          countries.map((country) => (
            <li key={country.name.common}>
              <div>
                <div>
                  {country.flag} {}
                  <strong>{country.name.common}</strong>
                  {country.name.common !== country.name.official && (
                    <span>
                      {" "}
                      (official name: <i>{country.name.official}</i>)
                    </span>
                  )}
                </div>
                <div>
                  Capital:{" "}
                  {country.capital ? country.capital.join(", ") : "None"}
                </div>
                <div>
                  Language(s):{" "}
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : "None"}
                </div>
                <div>
                  Demonym: {country.demonyms ? country.demonyms.eng.m : "None"}
                </div>
                <div>
                  Currency:{" "}
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")
                    : "None"}
                </div>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default CountryNames;
