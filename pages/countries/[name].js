import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountry,
  getSelectedCountry,
  removeSelectedCountry,
} from "@/redux/countries-slice";
import { API_URL_FULLNAME, API_URL_BORDERS } from "@/redux/constants";
import Link from "next/link";
import axios from "axios";

const CountryDetails = () => {
  const router = useRouter();
  const name = router.query.name;
  const dispatch = useDispatch();
  const country = useSelector(getSelectedCountry);
  const [borders, setBorders] = useState([]);

  const fetchCountryBorders = async () => {
    await axios
      .get(API_URL_BORDERS(localStorage.getItem("countryCode")))
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setBorders(data.map((item) => item.name.common));
      })
      .catch((error) => {
        return "NO BORDERS" + error.message;
      });
  };

  console.log(borders);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchCountryDetails = async () => {
      const response = await axios
        .get(API_URL_FULLNAME(name))
        .catch((error) => {
          console.log(error);
        });
      dispatch(selectCountry(response.data));

      const findBorder = response.data.find((item) => item.borders);

      if (findBorder !== undefined) {
        localStorage.setItem(
          "countryCode",
          response.data.map((item) => item.borders)
        );
      }
    };

    fetchCountryDetails();

    setTimeout(() => {
      if (localStorage.getItem("countryCode") !== null) {
        fetchCountryBorders();
      }
    }, 1000);

    return () => {
      dispatch(removeSelectedCountry([]));
      localStorage.removeItem("countryCode");
    };
  }, [dispatch, router.isReady]);

  return (
    <div>
      <Link href="/">Back to Main Page</Link>
      {country.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name.common}</h1>
            <h2>{item.subregion}</h2>
            {item.borders === undefined ? (
              "FUCK I HAVE NO BORDERS"
            ) : (
              <div>
                {borders.map((items, index) => {
                  return (
                    <div key={index}>
                      <a href={`/countries/${encodeURIComponent(items)}`}>
                        {items}
                      </a>
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
