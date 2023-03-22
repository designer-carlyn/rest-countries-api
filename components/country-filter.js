import React from "react";

const CountryFilter = ({ propsOnSearchCountry, propsOnSelectRegion }) => {
  const onSearchCountry = (event) => {
    let value = event.target.value;
    propsOnSearchCountry(value);
  };

  const onSelectRegion = (event) => {
    let value = event.target.value;
    propsOnSelectRegion(value);
  };

  return (
    <div className="country-list__filter">
      <div className="filter-search">
        <svg
          className="svg-icon search-icon"
          aria-label="search-icon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
        >
          <g className="search-path" fill="none" stroke="#848F91">
            <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
        <input
          type="text"
          onChange={onSearchCountry}
          placeholder="Search for a country..."
        />
      </div>
      <div className="filter-region">
        <select
          aria-label="select-region"
          defaultValue={""}
          onChange={onSelectRegion}
        >
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default CountryFilter;
