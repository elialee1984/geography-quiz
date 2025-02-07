import React from "react";

const CountryTimezones = ({ country }) => {
  return (
    <div>
      <div>
        {`Time Zone: `}
        {country.timezones ? (
          Array.isArray(country.timezones) && country.timezones.length > 1 ? (
            <ul style={{ margin: 0 }}>
              {country.timezones.map((timezone, index) => (
                <li key={index}>{timezone}</li>
              ))}
            </ul>
          ) : (
            country.timezones
          )
        ) : (
          <i>No data</i>
        )}
      </div>
    </div>
  );
};

export default CountryTimezones;
