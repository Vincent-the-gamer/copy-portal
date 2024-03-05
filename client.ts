import clipboard from "clipboardy"
import axios from "axios"
import { CLIENT_TARGET } from "./config"
import https from "https"

// Allow HTTPS self-signed certificate
const myAxios = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

const currentText = clipboard.readSync()

if (currentText) {
    myAxios.post(CLIENT_TARGET, {
        text: currentText
    }).then(res => {
        console.log(res.data.text)
    })
} else {
    console.log("Clipboard has nothing!")
}
