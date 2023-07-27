const express = require ("express");
const rutas = express.Router();
const controladorWhatsapp = require('../controllers/whatsapp.controller');

rutas.get('/', controladorWhatsapp.VerficiacionToken).post('/', controladorWhatsapp.RecibirMensaje)

module.exports = rutas; 