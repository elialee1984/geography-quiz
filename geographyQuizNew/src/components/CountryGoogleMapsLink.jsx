import React from "react";

const CountryGoogleMapsLink = ({ country }) => {
  return (
    <div>
      <div>
        {country.maps.googleMaps ? (
          <a
            href={country.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        ) : (
          <i>No data</i>
        )}
      </div>
    </div>
  );
};

export default CountryGoogleMapsLink;
