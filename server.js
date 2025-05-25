const dotenv = require("dotenv")

dotenv.config()

const express = require("express")
const cors = require("cors")
const drakorkita = require("./src/routes/drakorkita")

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use("/drakorkita", drakorkita)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Unofficial Drakor APIs",
        developed_by: "ZeroneDoo",
        github: "https://github.com/senna-js/zeronewatch-api.git",
        data: {
            drakorkita_url: process.env.DRAKORKITA_URL,
        }
    })
})

app.get("*", (req, res) => {
    res.status(404).json({
        message: "404 route not found"
    })
})

module.exports = app
