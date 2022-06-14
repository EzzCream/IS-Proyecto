import { ProdModel } from '../model/producto.model.js';

export const createProd = async (req, res) => {
	const { body } = req;
	const { nombre, precio, detalle, stock, proveedor } = body;
	await ProdModel.create({
		nombre: nombre,
		precio: precio,
		detalle: detalle,
		stock: stock,
		proveedor: proveedor,
	});
	res.status(200).send(
		'<script type="text/javascript">alert("Producto agregado");window.location.href = "http://localhost:8080/menu/productos/productos.html";</script>',
	);
};

export const editProd = async (req, res) => {
	const { body } = req;
	const { _id, nombre, precio, detalle, stock, proveedor } = body;
	const obj = {
		nombre,
		precio,
		detalle,
		stock,
		proveedor,
	};
	await ProdModel.updateOne({ _id: _id }, obj);
	res.status(200).send(
		'<script type="text/javascript">alert("Producto actualizado");window.location.href = "http://localhost:8080/menu/productos/productos.html";</script>',
	);
};

export const deleteProd = async (req, res) => {
	const { body } = req;
	await ProdModel.deleteOne({ _id: body._id });
	res.status(200).send(
		'<script type="text/javascript">alert("Producto eliminado");window.location.href = "http://localhost:8080/menu/productos/productos.html";</script>',
	);
};

export const renderEdit = async (req, res) => {
	const response = await ProdModel.find();
	res.render('pages/editProd', { response });
};

export const renderDelete = async (req, res) => {
	const response = await ProdModel.find();
	res.render('pages/deleteProd', { response });
};

export const renderRead = async (req, res) => {
	const response = await ProdModel.find();
	res.render('pages/readProd', { response });
};
