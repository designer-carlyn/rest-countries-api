import "@/scss/layout/index.scss";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ThemeContext } from "@/context/theme-context";
import Header from "@/components/header";
import "../scss/components/theme-style.scss";
import "../scss/components/header.scss";
import "../scss/components/country-filter.scss";
import "../scss/components/country-card.scss";
import "../scss/components/country-details.scss";
import "../scss/components/country-card-loader.scss";

export default function App({ Component }) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
          <Header></Header>
          <main
            className={`rest-countries ${
              darkTheme ? "dark-theme" : "light-theme"
            }`}
          >
            <Component />
          </main>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}
