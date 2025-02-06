import React from "react";

const CountryStartOfWeek = ({ country }) => {
  return (
    <div>
      <div>
        {`Start of the Week: `}
        {country.startOfWeek
          ? country.startOfWeek.charAt(0).toUpperCase() +
            country.startOfWeek.slice(1)
          : <i>No data</i>}
      </div>
    </div>
  );
};

export default CountryStartOfWeek;
