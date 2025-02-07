import React, { useRef, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      )}
    </div>
  );
};

export default Filter;
