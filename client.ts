import clipboard from "clipboardy"
import axios from "axios"

const currentText = clipboard.readSync()

const target = "http://localhost:8080"

if(currentText) {
    axios.post(target, {
        text: currentText
    }).then(res => {
        console.log(res.data.text)
    })
} else {
    console.log("Clipboard has nothing!")
}
