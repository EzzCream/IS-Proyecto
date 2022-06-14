import express from 'express';
import * as Venta from '../controllers/venta.controllers.js';

const router = express.Router();

router.post('/crearVenta', Venta.crearVenta);

router.get('/crear', Venta.renderCrearVenta);

router.get('/consultar', Venta.renderReadVenta);

export default router;
