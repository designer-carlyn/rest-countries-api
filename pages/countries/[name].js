import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selecCountry, getSelectedCountry } from "@/redux/countries-slice";
import axios from "axios";

const CountryDetails = () => {
  const router = useRouter();
  const name = router.query.name;
  const dispatch = useDispatch();
  const country = useSelector(getSelectedCountry);

  console.log(country);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const response = await axios
        .get(`https://restcountries.com/v3.1/name/${name}`)
        .catch((error) => {
          console.log(error);
        });
      dispatch(selecCountry(response.data));
    };
    fetchCountryDetails();
  }, [dispatch]);

  return (
    <div>
      <h1>asd</h1>
    </div>
  );
};

export default CountryDetails;
