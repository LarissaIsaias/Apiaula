
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas = require('./routes/routesprod')
const clientes = require('./routes/routesclien')

app.use(bodyParser.json())

app.use('/produtos', rotas)
app.use('/clientes', clientes)

app.listen(5000)

module.exports = app;
