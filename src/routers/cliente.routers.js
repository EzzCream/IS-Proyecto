import express from 'express';
import * as Cliente from '../controllers/cliente.controllers.js';

const router = express.Router();

router.post('/createCliente', Cliente.createCliente);

router.post('/editCliente', Cliente.editCliente);

router.post('/deleteCliente', Cliente.deleteCliente);

router.get('/crear', Cliente.renderCreateCliente);

router.get('/editar', Cliente.renderEditCliente);

router.get('/eliminar', Cliente.renderDeleteCliente);

router.get('/consultar', Cliente.renderReadCliente);

export default router;
