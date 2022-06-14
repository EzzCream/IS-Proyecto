import mongoose, { Mongoose } from 'mongoose';

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

export const DistModel = Mongoose.model('Distribuidor', Schema);
