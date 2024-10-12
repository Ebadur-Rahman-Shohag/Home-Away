
import { bangladeshLocations } from "./bangladesh";
export const formattedCountries = bangladeshLocations.map((item) => ({
  code: item.code,
  name: item.name,
  location: item.location,
  region: item.region,
}));
export const findLocation = (country: string) =>
  formattedCountries.find((item) => item.name === country);





/*
import countries from "world-countries";

export const formattedCountries = countries.map((item) => ({
  code: item.cca2,
  name: item.name.common,
  flag: item.flag,
  location: item.latlng,
  region: item.region,
}));
export const findCountryByCode = (code: string) =>
  formattedCountries.find((item) => item.code === code);
*/