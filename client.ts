import clipboard from "clipboardy"
import axios from "axios"
import { CLIENT_TARGET } from "./config"

const currentText = clipboard.readSync()


if(currentText) {
    axios.post(CLIENT_TARGET, {
        text: currentText
    }).then(res => {
        console.log(res.data.text)
    })
} else {
    console.log("Clipboard has nothing!")
}
