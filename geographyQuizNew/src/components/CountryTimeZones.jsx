import React from "react";

const CountryTimezones = ({ country }) => {
  return (
    <div>
      <div>
        {`Time Zone: `}
        {country.timezones ? country.timezones : "no data"}
      </div>
    </div>
  );
};

export default CountryTimezones;
