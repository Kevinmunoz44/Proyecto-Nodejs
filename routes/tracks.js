const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItems } = require('../controller/tracks');
const customHeader = require('../middleware/customHeader');
const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks')

//TODO http://localhost/tracks GET, POST, DELETE, PUT

/**
 * Lista de items
 */

router.get('/', getItems);

/**
 * Obtener detalle de item
 */

router.get('/:id',validatorGetItem, getItem);

/**
 * Crear los items
 */

router.post('/', validatorCreateItem, createItem);

/**
 * Actualizar los items
 */

router.put('/:id',validatorGetItem, validatorCreateItem, updateItem);

/**
 * Obtener detalle de item
 */

router.delete('/:id',validatorGetItem, deleteItems);


module.exports = router;