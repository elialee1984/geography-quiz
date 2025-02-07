import React from "react";

const Filter = ({
  showIndependent,
  setShowIndependent,
  showNonIndependent,
  setShowNonIndependent,
  showLandlocked,
  setShowLandlocked,
  showNonLandlocked,
  setShowNonLandlocked,
}) => {
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showIndependent}
            onChange={() => setShowIndependent(!showIndependent)}
          />
          Show only independent countries
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={showNonIndependent}
            onChange={() => setShowNonIndependent(!showNonIndependent)}
          />
          Show only non-independent countries
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={showLandlocked}
            onChange={() => setShowLandlocked(!showLandlocked)}
          />
          Show only landlocked countries
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={showNonLandlocked}
            onChange={() => setShowNonLandlocked(!showNonLandlocked)}
          />
          Show only non-landlocked countries
        </label>
      </div>
    </div>
  );
};

export default Filter;
