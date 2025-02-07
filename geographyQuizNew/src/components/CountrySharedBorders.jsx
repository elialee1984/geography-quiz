import React from "react";

const CountrySharedBorders = ({ country }) => {
  return (
    <div>
      <div>
        {country.borders ? `Shares borders with ${country.borders.join(", ")}` : <i>No shared borders</i>}
      </div>
    </div>
  );
};

export default CountrySharedBorders;
