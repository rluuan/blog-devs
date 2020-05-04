const express = require('express')
const moogose = require('mongoose')
const { errors } = require('celebrate')

const app = express()

moogose.set('useCreateIndex', true)
moogose.connect('mongodb://localhost:27017/App', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(errors())
app.use(require('./routes'))
app.listen(3000)