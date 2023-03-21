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

  useEffect(() => {
    if (!router.isReady) return;

    const fetchCountryDetails = async () => {
      const response = await axios
        .get(API_URL_FULLNAME(name))
        .catch((error) => {
          console.log(error);
        });

      const countryDetails = response.data.map((item) => {
        let object = {};

        object.name = item.name.common;
        object.nativeName = item.name.nativeName;
        object.borders = item.borders;
        object.population = item.population;
        object.tld = item.tld;
        object.currencies = item.currencies;
        object.region = item.region;
        object.languages = item.languages;
        object.subregion = item.subregion;
        object.capital = item.capital;
        object.continents = item.continents;
        object.flags = item.flags;

        return object;
      });

      dispatch(selectCountry(countryDetails));

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
  }, [dispatch, router.isReady, name]);

  return (
    <section className="rest-countries__details">
      <div className="container-fluid">
        <Link className="details-back" href="/">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
          </svg>
          Back
        </Link>
        {country.map((item, index) => {
          return (
            <div className="details-grid" key={index}>
              <div className="details-image">
                <img src={item.flags.svg} alt={item.flags.alt} />
              </div>

              <div className="details-info">
                <h1>{item.name}</h1>
                <h2>
                  Native Name:
                  {Object.keys(item.nativeName).map((keys, index) => {
                    return (
                      <span key={index}>
                        <span> {item.nativeName[keys].common},</span>
                      </span>
                    );
                  })}
                </h2>
                <h3>
                  Continents: <span>{item.continents}</span>
                </h3>
                <h4>
                  Population: <span>{item.population}</span>
                </h4>
                <h5>
                  Currencies:
                  {Object.keys(item.currencies).map((keys, index) => {
                    return (
                      <span key={index}>
                        <span> {item.currencies[keys].name}</span>
                      </span>
                    );
                  })}
                </h5>
                <h6>
                  Region: <span>{item.region}</span>
                </h6>
                <div>
                  {Object.keys(item.languages).map((keys, index) => {
                    return (
                      <div key={index}>
                        <h3>{item.languages[keys]}</h3>
                      </div>
                    );
                  })}
                </div>
                <h3>{item.subregion}</h3>
                <h3>{item.capital}</h3>
                <br />
                <div>
                  {item.tld.map((items, index) => {
                    return (
                      <div key={index}>
                        <h3>{items}</h3> <br />
                      </div>
                    );
                  })}
                </div>
                <br />
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CountryDetails;
