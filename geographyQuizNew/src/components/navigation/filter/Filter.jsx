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
  showLeftSide = false,
  setShowLeftSide,
  showRightSide = false,
  setShowRightSide
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <label>
              <input
                type="checkbox"
                checked={showIndependent}
                onChange={() => {
                  setShowIndependent(!showIndependent);
                  if (!showIndependent) {
                    setShowNonIndependent(false);
                  }
                }}
              />
              Show only independent countries
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={showNonIndependent}
                onChange={() => {
                  setShowNonIndependent(!showNonIndependent);
                  if (!showNonIndependent) {
                    setShowIndependent(false);
                  }
                }}
              />
              Show only non-independent countries
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={showLandlocked}
                onChange={() => {
                  setShowLandlocked(!showLandlocked);
                  if (!showLandlocked) {
                    setShowNonLandlocked(false);
                  }
                }}
              />
              Show only landlocked countries
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={showNonLandlocked}
                onChange={() => {
                  setShowNonLandlocked(!showNonLandlocked);
                  if (!showNonLandlocked) {
                    setShowLandlocked(false);
                  }
                }}
              />
              Show only non-landlocked countries
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={showLeftSide}
                onChange={() => {
                  setShowLeftSide(!showLeftSide);
                  if (!showLeftSide) {
                    setShowRightSide(false);
                  }
                }}
              />
              Show only countries where the cars drive on the LEFT side of the road
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={showRightSide}
                onChange={() => {
                  setShowRightSide(!showRightSide);
                  if (!showRightSide) {
                    setShowLeftSide(false);
                  }
                }}
              />
              Show only countries where the cars drive on the RIGHT side of the road
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
