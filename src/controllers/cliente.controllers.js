import { ClientModel } from '../model/cliente.modelo.js';

export const createCliente = async (req, res) => {
	const { body } = req;

	const { nombre, numero, direccion } = body;

	await ClientModel.create({
		nombre,
		numero,
		direccion,
	});

	res.status(200).send(
		'<script type="text/javascript">alert("Producto agregado");window.location.href = "http://localhost:8080/menu/cliente/cliente.html";</script>',
	);
};

export const renderCreateCliente = (req, res) => {
	res.render('pages/cliente/createCliente', {});
};

export const editCliente = async (req, res) => {
	const { body } = req;
	const { _id, nombre, numero, direccion } = body;
	const obj = {
		nombre,
		numero,
		direccion,
	};
	await ClientModel.updateOne({ _id }, obj);
	res.status(200).send(
		'<script type="text/javascript">alert("Producto actualizado");window.location.href = "http://localhost:8080/menu/cliente/cliente.html";</script>',
	);
};

export const renderEditCliente = async (req, res) => {
	const response = await ClientModel.find();
	res.render('pages/cliente/editCliente', { response });
};

export const deleteCliente = async (req, res) => {
	const { body } = req;
	await ClientModel.deleteOne({ _id: body._id });
	res.status(200).send(
		'<script type="text/javascript">alert("Producto Eliminado");window.location.href = "http://localhost:8080/menu/cliente/cliente.html";</script>',
	);
};

export const renderDeleteCliente = async (req, res) => {
	const response = await ClientModel.find();
	res.render('pages/cliente/deleteCliente', { response });
};

export const renderReadCliente = async (req, res) => {
	const response = await ClientModel.find();
	res.render('pages/cliente/readCliente', { response });
};
