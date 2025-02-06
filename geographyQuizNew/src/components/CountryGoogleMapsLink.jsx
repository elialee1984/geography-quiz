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
          "no data"
        )}
      </div>
    </div>
  );
};

export default CountryGoogleMapsLink;
