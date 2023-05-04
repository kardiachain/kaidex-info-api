# KaiDex API

The KaiDex API is a set of endpoints used by market aggregators (e.g. coinmarketcap.com) to surface Kaidex liquidity
and volume information. All information is fetched from the underlying subgraphs.

## Documentation

The documentation of the endpoints, for Kaidex, can be found [here](documentation.md).

## Production

### Deploy

Deployments to production are triggered by a webhook when a commit, or a pull-request is merged to `master`.

If you need to force a deployment, use the following command:

```shell
# Install dependencies
yarn

yarn start
```
