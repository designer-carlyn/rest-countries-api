import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCountries } from "@/redux/countries-slice";

import CountryCard from "./country-card";

const CountryList = () => {
  const countries = useSelector(getAllCountries);
  const [filteredCountry, setfilteredCountry] = useState(countries);
  const [searchInput, setSearchInput] = useState("");
  const [selectRegion, setSelectRegion] = useState("");

  const onSearchCountry = (event) => {
    let value = event.target.value;
    setSearchInput(value.toLowerCase());
  };

  const onSelectRegion = (event) => {
    let value = event.target.value;
    setSelectRegion(value);
  };

  const filteringCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    setfilteredCountry(filteringCountry);
  }, [searchInput, countries]);

  return (
    <div>
      {searchInput}
      <input
        type="text"
        onChange={onSearchCountry}
        placeholder="Search country here..."
      />
      <select defaultValue={""} onChange={onSelectRegion}>
        <option value="" disabled>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceenia">Oceenia</option>
      </select>
      {filteredCountry.map((country, index) => {
        return (
          <CountryCard key={index} name={country.name.common}></CountryCard>
        );
      })}
    </div>
  );
};

export default CountryList;
