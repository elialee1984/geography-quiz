import React from "react";

const CountryCapitals = ({ country }) => {
  return (
    <div> 
      <div>
        Capital: {country.capital ? country.capital.join(", ") : "None"}
      </div>
    </div>
  );
};

export default CountryCapitals;
