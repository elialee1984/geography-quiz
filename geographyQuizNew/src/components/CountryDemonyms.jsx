import React from "react";

const CountryDemonyms = ({ country }) => {
  return (
    <div>
      <div>
        {`Demonym: `}
        {country.demonyms ? country.demonyms.eng.m : <i>None</i>}
      </div>
    </div>
  );
};

export default CountryDemonyms;
