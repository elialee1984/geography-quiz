import React from "react";

const CountryDemonyms = ({ country }) => {
  return (
    <div>
      <div>
      {`Demonym: `}
      {country.demonyms ? country.demonyms.eng.m : "None"}
      </div>
    </div>
  );
};

export default CountryDemonyms;

