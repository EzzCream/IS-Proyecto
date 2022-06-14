import { CompraModel } from '../model/compra.model.js';
import { ProdModel } from '../model/producto.model.js';
import { DistModel } from '../model/distribuidor.model.js';

export const crearCompra = async (req, res) => {
	const { body } = req;
	const { fecha_compra, proveedor, producto, total } = body;

	await CompraModel.create({
		fecha_compra,
		proveedor,
		producto,
		total,
	});
	res.status(200).send(
		'<script type="text/javascript">alert("Compra agregado");window.location.href = "http://localhost:8080/menu/compra/compra.html";</script>',
	);
};

export const renderCrearCompra = async (req, res) => {
	const productos = await ProdModel.find();
	const dist = await DistModel.find();

	res.render('pages/compra/createCompra', { productos, dist });
};

export const renderReadCompra = async (req, res) => {
	const response = await CompraModel.find();

	res.render('pages/compra/readCompra', { response });
};
