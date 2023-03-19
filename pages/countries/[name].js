import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountry,
  getSelectedCountry,
  removeSelectedCountry,
} from "@/redux/countries-slice";
import { API_URL_FULLNAME } from "@/redux/constants";
import axios from "axios";

const CountryDetails = () => {
  const router = useRouter();
  const name = router.query.name;
  const dispatch = useDispatch();
  const country = useSelector(getSelectedCountry);

  const checkBorders = country.find((item) => item.borders);

  useEffect(() => {
    if (router.isReady) {
      const fetchCountryDetails = async () => {
        const response = await axios
          .get(API_URL_FULLNAME(name))
          .catch((error) => {
            console.log(error);
          });
        dispatch(selectCountry(response.data));
      };
      fetchCountryDetails();
    }

    return () => {
      dispatch(removeSelectedCountry([]));
    };
  }, [dispatch, router.isReady]);

  return (
    <div>
      {country.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name.common}</h1>
            <h2>{item.subregion}</h2>
            {checkBorders === undefined ? (
              "FUCK I HAVE NO BORDERS"
            ) : (
              <div>
                {item.borders.map((items) => {
                  return (
                    <div>
                      <small>{items}</small>
                      <br />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CountryDetails;
