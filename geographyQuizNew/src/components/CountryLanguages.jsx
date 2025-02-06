import React from "react";

const CountryLanguages = ({ country }) => {
  return (
    <div>
      <div>
        {`Language(s): `}
        <ul>
          {country.languages
            ? Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))
            : <i>None</i>}
        </ul>
      </div>
    </div>
  );
};

export default CountryLanguages;
