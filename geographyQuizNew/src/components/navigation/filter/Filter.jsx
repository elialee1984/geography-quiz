import React, { useRef, useState } from "react";

const Filter = ({
  showIndependent = false,
  setShowIndependent,
  showNonIndependent = false,
  setShowNonIndependent,
  showLandlocked = false,
  setShowLandlocked,
  showNonLandlocked = false,
  setShowNonLandlocked,
  showRightSide = false,
  setShowRightSide,
  showLeftSide = false,
  setShowLeftSide,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = () => {
    onFilterChange();
  };

  /** DON'T DELETE!
//   const handleClickOutside = (event) => {
//     if (menuRef.current && !menuRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
 */

  return (
    <div className="menu-container" ref={menuRef}>
      <button onClick={toggleMenu}>Filters</button>
      {isOpen && (
        <div className="menu-content">
          <div>
            <button
              type="button"
              className={showIndependent ? "active" : ""}
              onClick={() => {
                setShowIndependent(!showIndependent);
                handleFilterChange();
                if (!showIndependent) {
                  setShowNonIndependent(false);
                }
              }}
            >
              Sovereign
            </button>
            <button
              type="button"
              className={showNonIndependent ? "active" : ""}
              onClick={() => {
                setShowNonIndependent(!showNonIndependent);
                handleFilterChange();
                if (!showNonIndependent) {
                  setShowIndependent(false);
                }
              }}
            >
              Non-sovereign
            </button>
          </div>
          <div>
            <button
              type="button"
              className={showLandlocked ? "active" : ""}
              onClick={() => {
                setShowLandlocked(!showLandlocked);
                handleFilterChange();
                if (!showLandlocked) {
                  setShowNonLandlocked(false);
                }
              }}
            >
              Landlocked
            </button>
            <button
              type="button"
              className={showNonLandlocked ? "active" : ""}
              onClick={() => {
                setShowNonLandlocked(!showNonLandlocked);
                handleFilterChange();
                if (!showNonLandlocked) {
                  setShowLandlocked(false);
                }
              }}
            >
              Not landlocked
            </button>
          </div>
          <div>
            <button
              type="button"
              className={showRightSide ? "active" : ""}
              onClick={() => {
                setShowRightSide(!showRightSide);
                handleFilterChange();
                if (!showRightSide) {
                  setShowLeftSide(false);
                }
              }}
            >
              Driving on the RIGHT side
            </button>
            <button
              type="button"
              className={showLeftSide}
              onClick={() => {
                setShowLeftSide(!showLeftSide);
                handleFilterChange();
                if (!showLeftSide) {
                  setShowRightSide(false);
                }
              }}
            >
              Driving on the LEFT side
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
