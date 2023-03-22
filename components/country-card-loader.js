import React from "react";

const CountryCardLoader = () => {
  return (
    <div className="country-card-loader">
      <div className="loader-image loader-gradient"></div>
      <div className="loader-content">
        <div className="loader-item loader-gradient"></div>
        <div className="loader-item loader-gradient"></div>
        <div className="loader-item loader-gradient"></div>
        <div className="loader-item loader-gradient"></div>
      </div>
    </div>
  );
};

export default CountryCardLoader;
