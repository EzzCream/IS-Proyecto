import express from 'express';
import * as ProdController from '../controllers/prod.conotrollers.js';

const router = express.Router();

router.post('/crearProd', ProdController.createProd);

router.post('/actProd', ProdController.editProd);

router.post('/delProd', ProdController.deleteProd);

router.get('/menu/productos/EditarProducto', ProdController.renderEdit);

router.get('/menu/productos/EliminarProducto', ProdController.renderDelete);

router.get('/menu/productos/ConsultarProducto', ProdController.renderRead);

export default router;
