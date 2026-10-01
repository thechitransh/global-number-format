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

## Custom Currency Symbol

You can optionally provide a custom currency symbol when configuring the country.

If `currencySymbol` is not provided, the package automatically uses the default currency symbol for the configured country.

### Default Currency Symbol

```ts
configure({
  country: "IN",
});

formatCurrency(100000);
// "₹1,00,000.00"
```

### Custom Currency Symbol

```ts
configure({
  country: "IN",
  currencySymbol: "Rs.",
});

formatCurrency(100000);
// "Rs. 1,00,000.00"
```

The custom currency symbol only affects `formatCurrency()`. Number formatting remains unchanged:

```ts
formatNumber(100000);
// "1,00,000"
```

You can use any custom text as the currency symbol:

```ts
configure({
  country: "IN",
  currencySymbol: "INR",
});

formatCurrency(100000);
// "INR 1,00,000.00"
```

## Change Country

You can change the global configuration whenever your application needs to switch countries.

### India

```ts
configure({
  country: "IN",
});

formatNumber(1234567);
// "12,34,567"

formatCurrency(100000);
// "₹1,00,000.00"
```

### United States

```ts
configure({
  country: "US",
});

formatNumber(1234567);
// "1,234,567"

formatCurrency(100000);
// "$100,000.00"
```

### Germany

```ts
configure({
  country: "DE",
});

formatNumber(1234567);
// "1.234.567"

formatCurrency(100000);
// "100.000,00 €"
```

## API

### `configure()`

Configures the country used by the formatter.

```ts
configure({
  country: "IN",
});
```

You can optionally provide a custom currency symbol:

```ts
configure({
  country: "IN",
  currencySymbol: "Rs.",
});
```

#### Options

| Option           | Type      | Required | Description                                       |
| ---------------- | --------- | -------- | ------------------------------------------------- |
| `country`        | `Country` | Yes      | Country used to determine the locale and currency |
| `currencySymbol` | `string`  | No       | Custom currency symbol used by `formatCurrency()` |

If `currencySymbol` is omitted, the default currency symbol provided by `Intl.NumberFormat` is used.

### `formatNumber()`

Formats a number according to the configured country.

```ts
formatNumber(1234567);
```

Examples:

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

With a custom currency symbol:

```ts
configure({
  country: "IN",
  currencySymbol: "Rs.",
});

formatCurrency(100000);
// "Rs. 1,00,000.00"
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

The `Country` type can also be used when needed:

```ts
import type { Country } from "global-number-format";
```

## How It Works

The package provides a simple country-based API while using the native JavaScript `Intl.NumberFormat` API for the actual formatting.

```text
configure({
  country: "IN",
  currencySymbol: "Rs."
})
            ↓
      Country config
            ↓
     Locale + Currency
            ↓
      Intl.NumberFormat
            ↓
      Formatted value
```

The `currencySymbol` option is optional. When it is not provided, the default currency symbol from `Intl.NumberFormat` is used.

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

Currency formatting can also be used:

```tsx
<Text>{formatCurrency(125000)}</Text>
```

Output:

```text
₹1,25,000.00
```

## Requirements

- Node.js
- JavaScript or TypeScript
- `Intl.NumberFormat` support

## License

MIT
