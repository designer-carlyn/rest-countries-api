import React from "react";
import { useSelector } from "react-redux";
import { getAllCountries } from "@/redux/countries-slice";

import CountryCard from "./country-card";

const CountryList = () => {
  const countries = useSelector(getAllCountries);

  return (
    <div>
      {countries.map((country, index) => {
        return (
          <CountryCard key={index} name={country.name.common}></CountryCard>
        );
      })}
    </div>
  );
};

export default CountryList;
