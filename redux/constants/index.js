export const API_URL_ALL =
  "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";

export const API_URL_FULLNAME = (name) =>
  `https://restcountries.com/v3.1/name/${name}?fullText=true`;

export const API_URL_BORDERS = (borders) =>
  `https://restcountries.com/v3.1/alpha?codes=${borders}`;
