import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountries, getAllCountries } from "@/redux/countries-slice";
import axios from "axios";

import CountryList from "@/components/country-list";

export default function Home() {
  const countries = useSelector(getAllCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios
        .get("https://restcountries.com/v3.1/all?fields=name,population")
        .catch((error) => {
          console.log("Error: " + error);
        });

      dispatch(setCountries(response.data));
    };
    fetchCountries();
  }, [dispatch]);

  return (
    <main>
      <CountryList></CountryList>
    </main>
  );
}
