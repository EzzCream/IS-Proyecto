import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	precio: {
		type: Number,
		required: true,
	},
	detalle: {
		type: String,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
	proveedor: {
		type: String,
		required: true,
	},
});

export const ProdModel = mongoose.model('Producto', Schema);
