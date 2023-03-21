import React, { useContext } from "react";
import { ThemeContext } from "@/context/theme-context";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <header className={`header ${darkTheme ? "light-theme" : "dark-theme"}`}>
      <div className="container-fluid">
        <div className="header__wrapper">
          <h1>Where in the world?</h1>
          <button onClick={toggleTheme}>
            {darkTheme ? (
              <>
                <img
                  src="https://ik.imagekit.io/csdesigner/todo_app/icon-moon_x6usD35ni.svg?updatedAt=1678693698719"
                  alt="icon-moon"
                />
                <div className="theme-label">Dark Mode</div>
              </>
            ) : (
              <>
                <img
                  src="https://ik.imagekit.io/csdesigner/todo_app/icon-sun_71h0PZdvYg.svg?updatedAt=1678693698856"
                  alt="icon-sun"
                />
                <div className="theme-label">Light Mode</div>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
