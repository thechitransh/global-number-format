import { countries, Country } from "./countries";

let currentCountry: Country = "IN";


export function configure(options: { country: Country;}) {
  currentCountry = options.country;
}

export function getCountry() {
  return currentCountry;
}

export function getCountryConfig() {
  return countries[currentCountry];
}