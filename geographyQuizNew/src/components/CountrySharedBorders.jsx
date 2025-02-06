import React from "react";

const CountrySharedBorders = ({ country }) => {
  return (
    <div>
      <div>
        {`Shares borders with `}
        {country.borders ? country.borders.join(", ") : "no other country"}.
      </div>
    </div>
  );
};

export default CountrySharedBorders;
