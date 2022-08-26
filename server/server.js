const express = require("express")
const axios = require("axios")
const PORT = 3001
const cors = require("cors")
const app = express()
const API_KEY = "81087f92-e521-48ba-b151-fc3c0f9095b1"
const Url = `https://api.thecatapi.com/v1/images/search?limit=66&api_key=${API_KEY}`
const AllcatAPI = `https://api.thecatapi.com/v1/breeds`

app.use(cors({
    origin: "http://localhost:3000"
}))

app.get("/kitties",(req,res) => {
    axios(Url)
        .then(response => {
            const catdetails = response.data
            res.json(catdetails)
        }).catch(err => console.log(err))
})

app.get("/catdetails",(req, res) => {
    axios(AllcatAPI)
        .then(response => {
            const allBreeds = response.data
            res.json(allBreeds)
        }).catch(err => console.log(err))
})

app.listen(PORT,() => console.log(`express server is running on ${PORT}`))