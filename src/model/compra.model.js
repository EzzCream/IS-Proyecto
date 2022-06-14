import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	fecha_compra: {
		type: String,
		required: true,
	},
	proveedor: {
		type: String,
		required: true,
	},
	producto: {
		type: String,
		required: true,
	},
	total: {
		type: String,
		required: true,
	},
});

export const CompraModel = mongoose.model('Compra', Schema);
