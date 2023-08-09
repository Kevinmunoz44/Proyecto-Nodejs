const fs = require('fs');
const { matchedData } = require('express-validator');
const {storageModel} = require('../models');
const {handleHttpError} = require('../utils/handleError');
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}../storage`;

/**
 * Obtner lista de la base de datos
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEM')
    }
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'ERROR_LIST_ITEM')
    }
};

/**
 * Inserta un registro
 * @param {*} req 
 * @param {*} res
 */
const createItem =  async (req, res) => {
    const { body, file } = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})
};

/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateitem = async (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);
        const {filename} = dataFile;
        const filepath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filepath);
        const data = {
            filepath,
            deleted:1
        }
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
};




module.exports = {getItems, getItem, createItem, updateitem, deleteItems}