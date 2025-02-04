import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { usePortfolioStore } from "../stores/usePortfolioStore";
import logo from "/ellen-lindstrom-logga-text-rod.svg";

export const Header = () => {
  const dropdownRef = useRef();
  const buttonRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { showHeaderLogo, setScrollToContact  } = usePortfolioStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = () => {
    if (location.pathname !== "/home") {
      setScrollToContact(true);
      navigate("/");
    } else {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
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
  console.log(showHeaderLogo);

  return (
    <header
      className={`animate-fadeIn w-full fixed flex h-16 p-4 laptop:p-6 z-40 justify-between items-center font-body ${
        showHeaderLogo && "bg-warm-white/90"
      }`}
    >
      <NavLink to="/" aria-label="Link to Home">
        {showHeaderLogo && (
          <img
            src={logo}
            alt="ellen lindstrom logo"
            id="logo"
            className="animate-fadeIn h-8 tablet:h-10 object-cover hover:scale-110 transform transition-transform duration-300 origin-center"
          />
        )}
      </NavLink>
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="flex flex-col justify-center items-center z-50 cursor-pointer"
      >
        <span
          className={`bg-red hover:bg-rose-400 block transition-all duration-300 ease-out 
                      h-0.5 w-6 laptop:h-0.7 laptop:w-6 rounded-sm ${
                        isOpen
                          ? "rotate-45 translate-y-1 laptop:translate-y-1.2"
                          : "-translate-y-0.5 laptop:-translate-y-0.7"
                      }`}
        >
          {" "}
        </span>
        <span
          className={`bg-red  hover:bg-rose-400 block transition-all duration-300 ease-out 
                      h-0.5 w-6 laptop:h-0.7 laptop:w-6 rounded-sm my-0.5 laptop:my-0.7 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
        ></span>
        <span
          className={`bg-red  hover:bg-rose-400 block transition-all duration-300 ease-out 
                      h-0.5 w-6 laptop:h-0.7 laptop:w-6 rounded-xl ${
                        isOpen
                          ? "-rotate-45 -translate-y-1 laptop:-translate-y-1.2"
                          : "translate-y-0.5 laptop:translate-y-0.7"
                      }`}
        ></span>
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute laptop:top-4 laptop:right-12 top-0 z-40 right-0 w-full h-screen laptop:w-fit laptop:h-fit text-xl text-red  bg-warm-white/90 laptop:bg-warm-white/0 flex justify-center `}
        >
          <ul className="flex flex-col laptop:flex-row items-center align-middle laptop:items-end gap-6 laptop:gap-10 laptop:pb-4 laptop:px-6 font-light mt-48 laptop:mt-0">
            <NavLink
              to="/galleri"
              aria-label="Link to galleri"
              onClick={toggleMenu}
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "font-semibold"
                    : `hover:scale-110 text-red transform transition-transform duration-300 origin-center`
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
                    ? "font-semibold"
                    : `hover:scale-110 text-red transform transition-transform duration-300 origin-center`
                }`
              }
            >
              <li>Om Ellen</li>
            </NavLink>
            <li
            onClick={handleNavClick}
              className={`hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 origin-center cursor-pointer`}
            >Kontakt</li>
          </ul>
        </div>
      )}
    </header>
  );
};
