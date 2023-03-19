import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCountries } from "@/redux/countries-slice";
import axios from "axios";

import CountryList from "@/components/country-list";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios
        .get(
          "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
        )
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
