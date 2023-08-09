const {storageModel} = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtner lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({data})
};

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {};

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
const updateitem = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = (req, res) => {};




module.exports = {getItems, getItem, createItem, updateitem, deleteItems}