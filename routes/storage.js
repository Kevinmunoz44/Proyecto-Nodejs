const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {validatorGetItem} = require('../validators/storage')
const {getItems, getItem, createItem, updateitem, deleteItems} = require('../controller/storage');

/**
 * Obtener detalles lista items
 */
router.get('/', getItems);

/**
 * Obtener detalles items
 */
router.get('/:id', validatorGetItem, getItem);

/**
 * Eliminar items
 */
router.delete('/:id', validatorGetItem, deleteItems);

/**
 * Crear items
 */
router.post('/', uploadMiddleware.single('myfile'), createItem);

module.exports = router;
