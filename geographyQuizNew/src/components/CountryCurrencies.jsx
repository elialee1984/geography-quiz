import React from "react";

const CountryCurrencies = ({ country }) => {
  return (
    <div>
      <div>
        {`Currency: `}
        {country.currencies ? (
          Array.isArray(Object.values(country.currencies)) &&
          Object.values(country.currencies).length > 1 ? (
            <ul>
              {Object.values(country.currencies).map((currency, index) => (
                <li key={index}>
                  {currency.name} ({currency.symbol})
                </li>
              ))}
            </ul>
          ) : (
            <span>
              {Object.values(country.currencies)[0].name} (
              {Object.values(country.currencies)[0].symbol})
            </span>
          )
        ) : (
          <i>None</i>
        )}
      </div>
    </div>
  );
};

export default CountryCurrencies;
