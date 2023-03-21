import React from "react";
import Link from "next/link";

const CountryCard = ({ name }) => {
  return (
    <div>
      <Link href={`/countries/${encodeURIComponent(name)}`}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default CountryCard;
