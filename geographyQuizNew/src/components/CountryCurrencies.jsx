import React from "react";

const CountryCurrencies = ({ country }) => {
  return (
    <div>
      <div>
        {`Currency: `}
        <ul>
          {country.currencies
            ? Object.values(country.currencies).map((currency, index) => (
                <li key={index}>
                  {currency.name} ({currency.symbol})
                </li>
              ))
            : <i>None</i>}
        </ul>
      </div>
    </div>
  );
};

export default CountryCurrencies;
