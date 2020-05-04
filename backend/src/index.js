const express = require('express')
const moogose = require('mongoose')

const app = express()

moogose.connect('mongodb://localhost:27017/App', {
    useNewUrlParser: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(require('./routes'))
app.listen(3000)