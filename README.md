# global-number-format

A simple, locale-aware number formatting utility for JavaScript and TypeScript applications.

Configure your country once, then format numbers and currencies anywhere in your project without repeatedly passing the locale.

## Installation

```bash
npm install global-number-format
```

## Quick Start

Configure the country once:

```ts
import { configure, formatNumber, formatCurrency } from "global-number-format";

configure({
  country: "IN",
});
```

Now use the formatter anywhere in your application:

```ts
formatNumber(10000);
// "10,000"

formatNumber(100000);
// "1,00,000"

formatNumber(1234567);
// "12,34,567"

formatCurrency(100000);
// "₹1,00,000.00"
```

You don't need to pass the country or locale every time.

## Change Country

You can change the global configuration whenever your application needs to switch countries.

### India

```ts
configure({
  country: "IN",
});

formatNumber(1234567);
// "12,34,567"
```

### United States

```ts
configure({
  country: "US",
});

formatNumber(1234567);
// "1,234,567"
```

### Germany

```ts
configure({
  country: "DE",
});

formatNumber(1234567);
// "1.234.567"
```

## API

### `configure()`

Configure the country used by the formatter.

```ts
configure({
  country: "IN",
});
```

### `formatNumber()`

Formats a number according to the configured country.

```ts
formatNumber(1234567);
```

Example:

```text
IN → 12,34,567
US → 1,234,567
DE → 1.234.567
```

### `formatCurrency()`

Formats a number using the currency associated with the configured country.

```ts
configure({
  country: "IN",
});

formatCurrency(100000);
// "₹1,00,000.00"
```

## Supported Countries

The package uses JavaScript's built-in `Intl.NumberFormat` for locale-aware formatting.

Currently configured countries include:

- `IN` — India
- `US` — United States
- `GB` — United Kingdom
- `DE` — Germany
- `FR` — France

More countries can be added as the package evolves.

## TypeScript

The package includes TypeScript declarations out of the box.

```ts
import { configure, formatNumber, formatCurrency } from "global-number-format";
```

## How It Works

The package provides a simple country-based API while using the native JavaScript `Intl.NumberFormat` API for the actual formatting.

```text
configure({ country: "IN" })
            ↓
      Country config
            ↓
       Locale + Currency
            ↓
   Intl.NumberFormat
            ↓
     Formatted value
```

## React / React Native

The package does not require React or React Native and can be used in both web and mobile applications.

For example:

```ts
configure({
  country: "IN",
});
```

Then inside any component:

```tsx
<Text>{formatNumber(125000)}</Text>
```

Output:

```text
1,25,000
```

## Requirements

- Node.js
- JavaScript or TypeScript
- `Intl.NumberFormat` support

## License

MIT
