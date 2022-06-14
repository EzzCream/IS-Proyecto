import express from 'express';
import * as Distribuidor from '../controllers/distribuidor.controllers.js';

const router = express.Router();

router.post('/createDistribuidor', Distribuidor.createDistribuidor);

router.post('/editDistribuidor', Distribuidor.editDistribuidor);

router.get('/crear', Distribuidor.renderCreateDistribuidor);

router.get('/editar', Distribuidor.renderEditDistribuidor);

export default router;
