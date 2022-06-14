import express from 'express';
import * as Compra from '../controllers/compra.controllers.js';

const router = express.Router();

router.post('/createCompra', Compra.crearCompra);

router.get('/crear', Compra.renderCrearCompra);

router.get('/consultar', Compra.renderReadCompra);

export default router;
