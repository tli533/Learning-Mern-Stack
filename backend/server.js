require('dotenv').config()

const express = require('express')

//express app
const app = express()   

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listejn for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.Port)
})

process.env