import React from "react";

const CountryTimezones = ({ country }) => {
  return (
    <div>
      <div>
        {`Time Zone: `}
        {country.timezones ? country.timezones : <i>No data</i>}
      </div>
    </div>
  );
};

export default CountryTimezones;
