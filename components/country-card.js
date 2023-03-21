import React from "react";
import Link from "next/link";

const CountryCard = ({ name, population, region, capital, flag, alt }) => {
  return (
    <div className="country-card">
      <Link href={`/countries/${encodeURIComponent(name)}`}>
        <div className="card-image">
          <img src={flag} alt={alt} />
        </div>
        <div className="card-content">
          <h1>{name}</h1>
          <h2>
            Population: <span>{population}</span>
          </h2>
          <h3>
            Region: <span>{region}</span>
          </h3>
          <h4>
            Capital: <span>{capital}</span>
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
