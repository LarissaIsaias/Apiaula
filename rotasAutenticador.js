const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controladorAutenticador')

router.post('', controlador.login)

module.exports = router