const express = require('express')
const { errors } = require('celebrate')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(errors())
app.use(require('./routes'))
app.listen(3001)