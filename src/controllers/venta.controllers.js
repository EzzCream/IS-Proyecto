import { ClientModel } from '../model/cliente.modelo.js';
import { ProdModel } from '../model/producto.model.js';
import { VentaModel } from '../model/venta.model.js';

export const crearVenta = async (req, res) => {
	const { body } = req;
	const { fecha_venta, producto, cliente } = body;

	await VentaModel.create({
		fecha_venta,
		producto,
		cliente,
	});

	res.status(200).send(
		'<script type="text/javascript">alert("Venta agregado");window.location.href = "http://localhost:8080/menu/venta/venta.html";</script>',
	);
};

export const renderCrearVenta = async (req, res) => {
	const producto = await ProdModel.find();
	const cliente = await ClientModel.find();

	res.render('pages/venta/crearVenta', { producto, cliente });
};

export const renderReadVenta = async (req, res) => {
	const response = await VentaModel.find();
	res.render('pages/venta/readVenta', { response });
};
