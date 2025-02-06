import React from "react";

const CountryStatusCarsSideOfRoad = ({ country }) => {
  return (
    <div>
      <div>
        {country.car.side ? (
          <span>
            Car drives on the{" "}
            <span
              style={{
                color: country.car.side === "right" ? "lightblue" : "orange",
              }}
            >
              <strong>{country.car.side.toUpperCase()}</strong>
            </span>{" "}
            side of the road.
          </span>
        ) : (
          <i>No data</i>
        )}
      </div>
    </div>
  );
};

export default CountryStatusCarsSideOfRoad;
