const express = require ('express')
const router = express.Router()
const controller = require('../controladores/controladorclientes')

router.get('', controller.listClientes)
router.get('/:id', controller.getClientes)
router.post('', controller.createClientes)
router.post('/:id', controller.updateClientes)
router.delete('/:id', controller.deleteClientes)

module.exports = router;