import React from "react";

const CountryStatusLandlocked = ({ country }) => {
  return (
    <div>
      <div>
        {`Landlocked: `}
        {country.landlocked ? (
          <span style={{ color: "green" }}>yes</span>
        ) : (
          <span style={{ color: "red" }}>no</span>
        )}
      </div>
    </div>
  );
};

export default CountryStatusLandlocked;
