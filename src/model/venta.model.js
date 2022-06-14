import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	fecha_venta: {
		type: String,
		required: true,
	},
	producto: {
		type: String,
		required: true,
	},
	cliente: {
		type: String,
		required: true,
	},
});

export const VentaModel = mongoose.model('Venta', Schema);
