import React from "react";

const CountryRegions = ({ country }) => {
  return (
    <div>
      <div>
        {`Region: `}
        {country.region ? country.region : "No region"}
        {country.subregion ? <span> ({country.subregion})</span> : ""}
      </div>
    </div>
  );
};

export default CountryRegions;
