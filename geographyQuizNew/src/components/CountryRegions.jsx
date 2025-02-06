import React from "react";

const CountryRegions = ({ country }) => {
  return (
    <div>
      <div>
        {`Region: `}
        {country.region ? country.region : <i>No data</i>}
        {country.subregion ? <span> ({country.subregion})</span> : ""}
      </div>
    </div>
  );
};

export default CountryRegions;
