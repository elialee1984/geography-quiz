import React from "react";

const CountryFlag = ({ country }) => {
  return (
    <div>
      <div>
        {`Flag: `}
        {country.flags ? (
          <img
            alt={`Flag of ${country.name.common}`}
            src={country.flags.svg}
            style={{ width: 250 }}
          />
        ) : (
          <i>None</i>
        )}
      </div>
    </div>
  );
};

export default CountryFlag;
