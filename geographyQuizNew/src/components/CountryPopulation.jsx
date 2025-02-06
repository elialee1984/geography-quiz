import React from "react";

const CountryPopulation = ({ country }) => {
  return (
    <div>
      <div>
        {`Population: `}
        {country.population
          ? country.population.toLocaleString("en-US", {
              maximumFractionDigits: 0,
            })
          : "no data"}
      </div>
    </div>
  );
};

export default CountryPopulation;
