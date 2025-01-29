import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import logo from "/ellen-lindstrom-logga-text-ljus.svg";

export const Header = () => {
  const dropdownRef = useRef();
  const buttonRef = useRef();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { showLogo, bgWhite } = usePortfolioStore()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu when navigating to a new page
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log(bgWhite)

  return (
    <header className={`w-full fixed flex h-16 p-4 z-40 justify-between  items-center font-body `}>
      <NavLink to="/" aria-label="Link to Home">
        {showLogo && (<img
          src={logo}
          alt="ellen lindstrom logo"
          id="logo"
          className="h-6 tablet:h-10 object-cover hover:scale-110 transform transition-transform duration-300 origin-center"
        />)}
      </NavLink>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="flex flex-col justify-center items-center z-50 cursor-pointer"
      >
        <span
          className={` ${bgWhite ? "bg-peach" : "bg-white"} hover:bg-peach block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                      }`}
        >
          {" "}
        </span>
        <span
          className={`${bgWhite ? "bg-peach" : "bg-white"}  hover:bg-peach block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
        ></span>
        <span
          className={`${bgWhite ? "bg-peach" : "bg-white"}  hover:bg-peach block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                      }`}
        ></span>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute laptop:top-4 laptop:right-12 top-0 z-40 right-0 w-full h-screen laptop:w-fit laptop:h-fit text-xl ${bgWhite ? "text-peach" : "text-white"}  bg-linear-45 from-red-700/90 to-red-400/90  laptop:bg-none flex justify-center `}
        >
          <ul className="flex flex-col laptop:flex-row items-center align-middle laptop:items-end gap-6 laptop:gap-10 laptop:pb-4 laptop:px-6 font-light mt-48 laptop:mt-0">
            <NavLink
              to="/galleri"
              aria-label="Link to galleri"
              onClick={toggleMenu}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "underline"
                    : `hover:scale-110 ${bgWhite ? "hover:text-dark-brown" : "text-peach"} transform transition-transform duration-300 origin-center`
                }`
              }
            >
              <li>Galleri</li>
            </NavLink>
            <NavLink
              to="/om-ellen"
              aria-label="Link to about ellen"
              onClick={toggleMenu}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "underline"
                    : `hover:scale-110 ${bgWhite ? "hover:text-dark-brown" : "text-peach"} transform transition-transform duration-300 origin-center`
                }`
              }
            >
              <li>Om Ellen</li>
            </NavLink>
            <NavLink
              to="/kontakt"
              aria-label="Link to kontakt"
              onClick={toggleMenu}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "underline"
                    : `hover:scale-110 ${bgWhite ? "hover:text-dark-brown" : "text-peach"} transform transition-transform duration-300 origin-center`
                }`
              }
            >
              <li>Kontakt</li>
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};
