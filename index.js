
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas = require('./routes/routesprod')
const clientes = require('./routes/routesclien')
const rotasAutenticacao = require('./routes/rotasAutenticador')
const cookieParser = require('cookie-parser')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/documentacao.yaml')

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/produtos', rotas)
app.use('/clientes', clientes)
app.use('/auth', rotasAutenticacao)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(5000)

module.exports = app;
