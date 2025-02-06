import React from "react";

const CountryTimezones = ({ country }) => {
  return (
    <div>
      <div>
This will be the time zones
{`Time Zone: `}
{country.timezones ? country.timezones : "no data"}
      </div>
    </div>
  );
};

export default CountryTimezones;
