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
            <button
              type="button"
              onClick={() => {
                setShowIndependent(!showIndependent);
                if (!showIndependent) {
                  setShowNonIndependent(false);
                }
              }}
            >
              Show only independent countries
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                setShowNonIndependent(!showNonIndependent);
                if (!showNonIndependent) {
                  setShowIndependent(false);
                }
              }}
            >
              Show only non-independent countries
            </button>
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
        </div>
      )}
    </div>
  );
};

export default Filter;
