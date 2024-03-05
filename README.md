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
 * server
 */
export const SERVER_HOST = "127.0.0.1"
export const SERVER_PORT = 8080

/**
 * client
 */

// fill in the server address where you've deployed.
// if nginx proxied, fill in your nginx api address.
export const CLIENT_TARGET = "http://localhost:8080"
```

4. In remote device, run `pnpm run server` to start the server.

5. In your device, to send your current clipboard text, run `pnpm run client`.

# Proxy 

Use `Nginx` + `NAT Traversal`. 

## Nginx
Copy the content of `nginx.conf` to your local nginx config file, and change `proxy_pass` to your API address.

```nginx
location /copy-portal {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_method POST;
    proxy_pass http://127.0.0.1:8080/;  # same as SERVER_LINK
}
```

## Expose your local API to NAT

To setup a `NAT Traversal`, you can use some service like `frp + cloud server`, `sakurafrp` or etc.

Then, expose your nginx proxied API to NAT, so that you can send your clipboard to remote device.


# License

[MIT License | Copyright (c) 2024-present Vincent-the-gamer](./LICENSE)