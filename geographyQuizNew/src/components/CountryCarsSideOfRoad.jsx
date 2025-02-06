import React from "react";

const CountryCarsSideOfRoad = ({ country }) => {
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
          "no data"
        )}
      </div>
    </div>
  );
};

export default CountryCarsSideOfRoad;
