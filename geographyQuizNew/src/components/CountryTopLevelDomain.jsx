import React from "react";

const CountryTopLevelDomain = ({ country }) => {
  return (
    <div>
      <div>
        {`Top-level domain: `}
        {country.tld ? country.tld.join(", ") : <i>No data</i>}
      </div>
    </div>
  );
};

export default CountryTopLevelDomain;
