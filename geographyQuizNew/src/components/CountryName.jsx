import React from "react";

const CountryName = ({ country }) => {
  return (
    <div>
      <div>
        {country.flag} {}
        <u>
          <strong>{country.name.common}</strong>
        </u>
        {country.name.common !== country.name.official && (
          <span>
            {" "}
            (official name: <i>{country.name.official}</i>)
          </span>
        )}
        {country.cca3 ? <strong> [{country.cca3}]</strong> : ""}
      </div>
    </div>
  );
};

export default CountryName;
