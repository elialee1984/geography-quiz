import React from "react";

const CountryIndependencyStatus = ({ country }) => {
  return (
    <div>
      <div>
        {`Independent: `}
        {country.independent ? (
          <span style={{ color: "green" }}>yes</span>
        ) : (
          <span style={{ color: "red" }}>no</span>
        )}
      </div>
    </div>
  );
};

export default CountryIndependencyStatus;
