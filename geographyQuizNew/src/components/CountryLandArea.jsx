import React from "react";

const CountryLandArea = ({ country }) => {
  return (
    <div>
      <div>
        {`Area: `}
        {country.area
          ? `${country.area.toLocaleString("en-US", {
              maximumFractionDigits: 0,
            })} sq km (${(country.area * 0.386102).toLocaleString("en-US", {
              maximumFractionDigits: 0,
            })} sq mi)`
          : <i>No data</i>}
      </div>
    </div>
  );
};

export default CountryLandArea;
