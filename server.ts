import express from "express"
import clipboard from "clipboardy"
import { SERVER_HOST, SERVER_PORT } from "./config"

const app = express()

// parse the request body of method post
app.use(express.json())

// cross origin
app.all("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'content-type')
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200)
    else
        next()
})

app.post("/", (req: any, res: any) => {
    const { text } = req.body
    clipboard.writeSync(text)
    // console.log(text)
    res.end(JSON.stringify({
        code: 200,
        text
    }))
})

/**
 * main
 */

app.listen(SERVER_PORT, () => {
    console.log(`Server started: http://${SERVER_HOST}:${SERVER_PORT}`)
})