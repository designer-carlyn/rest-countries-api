import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { getAllCountries } from "@/redux/countries-slice";

import CountryFilter from "./country-filter";
const CountryCard = lazy(() => import("./country-card"));
import CountryCardLoader from "./country-card-loader";

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
    <>
      <CountryFilter
        propsOnSearchCountry={onSearchCountry}
        propsOnSelectRegion={onSelectRegion}
      ></CountryFilter>
      <div className="country-list__grid">
        {filteredCountry.map((country, index) => {
          return (
            <Suspense key={index} fallback={<CountryCardLoader />}>
              <CountryCard
                key={index}
                name={country.name.common}
                population={country.population.toLocaleString()}
                region={country.region}
                capital={country.capital}
                flag={country.flags.svg}
                alt={country.flags.alt}
              ></CountryCard>
            </Suspense>
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
