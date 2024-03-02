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

3. In remote device, run `pnpm run server` to start the server.

4. In your device, edit `client.ts`, modify `target` to your remote device host and port.

```shell
const target = "http://localhost:8080"
```

Then, to send your current clipboard text, run `pnpm run client`.

# License

[MIT License | Copyright (c) 2024-present Vincent-the-gamer](./LICENSE)