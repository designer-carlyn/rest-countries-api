import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCountries } from "@/redux/countries-slice";

import CountryCard from "./country-card";

const CountryList = () => {
  const countries = useSelector(getAllCountries);
  const [filteredSearch, setfilteredSearch] = useState(countries);
  const [searchInput, setSearchInput] = useState("");

  const searchCountry = (event) => {
    let value = event.target.value;
    setSearchInput(value.toLowerCase());
  };

  const filteringSearch = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    setfilteredSearch(filteringSearch);
  }, [searchInput]);

  return (
    <div>
      {searchInput}
      <input
        type="text"
        onChange={searchCountry}
        placeholder="Search country here..."
      />
      {filteredSearch.map((country, index) => {
        return (
          <CountryCard key={index} name={country.name.common}></CountryCard>
        );
      })}
    </div>
  );
};

export default CountryList;
