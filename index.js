
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas = require('./routes/routesprod')
const clientes = require('./routes/routesclien')
const rotasAutenticacao = require('./routes/rotasAutenticador')

app.use(bodyParser.json())

app.use('/produtos', rotas)
app.use('/clientes', clientes)
app.use('/auth', rotasAutenticacao)

app.listen(5000)

module.exports = app;
