const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const giftExchange = require('./routes/gift-exchange')

const app = express()

app.use(bodyParser.json())

app.use(morgan('tiny'))

app.use('/gift-exchange', giftExchange)

app.get('/', (req, res) => {
    res.status(200).send({ "ping": "pong" })
})

module.exports = app
