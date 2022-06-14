import { DistModel } from '../model/distribuidor.model.js';

export const createDistribuidor = async (req, res) => {
	const { body } = req;

	const { nombre, telefono, direccion } = body;

	await DistModel.create({
		nombre,
		telefono,
		direccion,
	});

	res.status(200).send(
		'<script type="text/javascript">alert("Producto agregado");window.location.href = "http://localhost:8080/menu/distribuidor/distribuidor.html";</script>',
	);
};

export const renderCreateDistribuidor = async (req, res) => {
	res.render('pages/distribuidor/createDistribuidor', {});
};

export const editDistribuidor = async (req, res) => {
	const { body } = req;

	const { _id, nombre, numero, direccion } = body;

	const obj = {
		nombre,
		numero,
		direccion,
	};

	await DistModel.updateOne({ _id }, obj);
	res.status(200).send(
		'<script type="text/javascript">alert("Producto agregado");window.location.href = "http://localhost:8080/menu/distribuidor/distribuidor.html";</script>',
	);
};

export const renderEditDistribuidor = async (req, res) => {
	const response = await DistModel.find();
	res.render('pages/distribuidor/editDistribuidor', { response });
};
