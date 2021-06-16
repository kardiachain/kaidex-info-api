# Documentation

All Kaidex pairs consist of two different tokens. KAI is not a native currency in Kaidex, and is represented only by WKAI in the pairs. 

The canonical WKAI address used by the Kaidex interface is `0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://api.info.kaidex.io/api/summary)

Returns data for the top ~1000 Kaidex pairs, sorted by reserves. 

### Request

`GET https://api.info.kaidex.io/api/summary`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // KRC20 token addresses, joined by an underscore
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // last 24h volume denominated in token0
      "quote_volume": "...",          // last 24h volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_KAI": "..."          // liquidity denominated in KAI
    },
    // ...
  }
}
```

## [`/tokens`](https://api.info.kaidex.io/api/tokens)

Returns the tokens in the top ~1000 pairs on Kaidex, sorted by reserves.

### Request

`GET https://api.info.kaidex.io/api/tokens`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x...": {                        // the address of the BEP20 token
      "name": "...",                  // not necessarily included for BEP20 tokens
      "symbol": "...",                // not necessarily included for BEP20 tokens
      "price": "...",                 // price denominated in USD
      "price_KAI": "...",             // price denominated in KAI
    },
    // ...
  }
}
```

## [`/tokens/0x...`](h https://api.info.kaidex.io/api/tokens/0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d)

Returns the token information, based on address.

### Request

`GET  https://api.info.kaidex.io/api/tokens/0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "name": "...",                    // not necessarily included for BEP20 tokens
    "symbol": "...",                  // not necessarily included for BEP20 tokens
    "price": "...",                   // price denominated in USD
    "price_KAI": "...",               // price denominated in KAI
  }
}
```

## [`/pairs`]( https://api.info.kaidex.io/api/pairs)

Returns data for the top ~1000 Kaidex pairs, sorted by reserves.

### Request

`GET  https://api.info.kaidex.io/api/pairs`

### Response

```json5
{
  "updated_at": 1234567,              // UNIX timestamp
  "data": {
    "0x..._0x...": {                  // the asset ids of KAI and BEP20 tokens, joined by an underscore
      "pair_address": "0x...",        // pair address
      "base_name": "...",             // token0 name
      "base_symbol": "...",           // token0 symbol
      "base_address": "0x...",        // token0 address
      "quote_name": "...",            // token1 name
      "quote_symbol": "...",          // token1 symbol
      "quote_address": "0x...",       // token1 address
      "price": "...",                 // price denominated in token1/token0
      "base_volume": "...",           // volume denominated in token0
      "quote_volume": "...",          // volume denominated in token1
      "liquidity": "...",             // liquidity denominated in USD
      "liquidity_KAI": "..."          // liquidity denominated in KAI
    },
    // ...
  }
}
```
