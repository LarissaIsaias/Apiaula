const express = require ('express')
const router = express.Router()
const controller = require('../controladores/controladorprodutos')

router.get('', controller.listProdutos)
router.get('/:id', controller.getProdutos)
router.post('', controller.createProdutos)
router.post('/:id', controller.updateProdutos)
router.delete('/:id', controller.deleteProdutos)

module.exports = router;