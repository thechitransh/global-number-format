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

  const rounded = Math.round(value * 100) / 100;
  const digits = Number.isInteger(rounded) ? 0 : 2;

   if(currencySymbol){
    const formatted = new Intl.NumberFormat(locale, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(rounded);
    return `${currencySymbol}${formatted}`;
   }
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(rounded);
}