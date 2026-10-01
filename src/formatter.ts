import { getCountryConfig, getCurrencySymbol } from "./config.js";

let numberFormatter: Intl.NumberFormat | null = null;
let formatterLocale: string | null = null;

function getNumberFormatter() {
  const { locale } = getCountryConfig();
  
  if (!numberFormatter || formatterLocale !== locale) {
    numberFormatter = new Intl.NumberFormat(locale);
    formatterLocale = locale;
  }

  return numberFormatter;
}

export function formatNumber(value: number): string {
  return getNumberFormatter().format(value);
}

export function formatCurrency(value: number): string {
  const { locale, currency } = getCountryConfig();
   const currencySymbol  = getCurrencySymbol()

   if(currencySymbol){
    return  `${currencySymbol} ${formatNumber(value)}`
   }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}