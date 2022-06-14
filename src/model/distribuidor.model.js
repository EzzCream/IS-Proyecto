import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	telefono: {
		type: String,
		required: true,
	},
	direccion: {
		type: String,
		required: true,
	},
});

export const DistModel = mongoose.model('Distribuidor', Schema);
