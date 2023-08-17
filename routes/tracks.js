const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItems } = require('../controller/tracks');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');
const checkRol = require('../middleware/rol');

//TODO http://localhost/tracks GET, POST, DELETE, PUT

/**
 * Lista de items
 */

router.get('/', authMiddleware, getItems);

/**
 * Obtener detalle de item
 */

router.get('/:id',validatorGetItem, getItem);

/**
 * Crear los items
 */

router.post('/',
    authMiddleware,
    checkRol(['admin']),
    validatorCreateItem, 
    createItem);

/**
 * Actualizar los items
 */

router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);

/**
 * Obtener detalle de item
 */

router.delete('/:id',validatorGetItem, deleteItems);


module.exports = router;