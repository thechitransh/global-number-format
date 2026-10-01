import { countries, Country } from "./countries.js";

export type ConfigureOptions = {
  country: Country;
  currencySymbol?: string;
};

let currentCountry: Country = "IN";
let customCurrencySymbol: string | undefined;


export function configure(options: ConfigureOptions) {
  currentCountry = options.country;
  customCurrencySymbol = options.currencySymbol;
}

export function getCountry() {
  return currentCountry;
}

export function getCountryConfig() {
  return countries[currentCountry];
}

export function getCurrencySymbol() {
  return customCurrencySymbol;
}