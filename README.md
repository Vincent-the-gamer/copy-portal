<p align="center">
    <img src="./.github/portal.png" style="height: 90px;"/>
</p>

<h1 align="center">
    Copy Portal
</h1>

<p align="center">
    <i>
        <strike>
            Can't copy text to remote desktop? F**k!!!
        </strike>
    </i>
</p>

<p align="center">
   <b>Copy Portal</b> - Send your clipboard to another device's clipboard.
</p>

# Usage
`Node.js` is required.

1. Clone this repo to both your device and remote device: 

```shell
git clone https://github.com/Vincent-the-gamer/copy-portal.git
```

2. Install Dependencies
```shell
pnpm i
```

3. config your links in `config.ts`
```typescript
/**
 * proxy
 */

// if you don't need proxy, ignore this.
export const SMEE_PROXY_LINK = "your smee link"

/**
 * server
 */

// required!
export const SERVER_HOST = "127.0.0.1"
export const SERVER_PORT = 8080

/**
 * client
 */

// fill in the server address where you've deployed.
export const CLIENT_TARGET = "http://localhost:8080"
```

4. In remote device, run `pnpm run server` to start the server.

5. In your device, to send your current clipboard text, run `pnpm run client`.

# Proxy 

If you want to proxy your local service, use `webhook forward`: [https://smee.io/](https://smee.io/).

Edit `config.ts`, fill your link given by `smee.io` in `SMEE_PROXY_LINK`, then change `CLIENT_TARGET` to your `SMEE_PROXY_LINK`

Finally, run `pnpm run proxy` and `pnpm run server` to make your smee link a public API. 

# License

[MIT License | Copyright (c) 2024-present Vincent-the-gamer](./LICENSE)