import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCountries } from "@/redux/countries-slice";
import CountryFilter from "./country-filter";

import CountryCard from "./country-card";

const CountryList = () => {
  const countries = useSelector(getAllCountries);
  const [filteredCountry, setfilteredCountry] = useState(countries);
  const [searchInput, setSearchInput] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

  const onSearchCountry = (value) => {
    setSearchInput(value.toLowerCase());
  };

  const onSelectRegion = (value) => {
    setSelectRegion(value);
  };

  useEffect(() => {
    const filteringCountry = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(searchInput) &&
        country.region.toLowerCase().includes(selectRegion)
    );
    setfilteredCountry(filteringCountry);
  }, [searchInput, countries, selectRegion]);

  return (
    <div className="country-list">
      <CountryFilter
        propsOnSearchCountry={onSearchCountry}
        propsOnSelectRegion={onSelectRegion}
      ></CountryFilter>
      <div className="country-list__grid">
        {filteredCountry.map((country, index) => {
          return (
            <div key={index}>
              <CountryCard key={index} name={country.name.common}></CountryCard>
              <h5>{country.region}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
