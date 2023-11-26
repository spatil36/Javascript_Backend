require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send("Hello there..!!")
})

app.get('/twitter', (req, res) => {
    res.send("Shubham.dotcom")
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login here</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2> Code is here</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`)
})