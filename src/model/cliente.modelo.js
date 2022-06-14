import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
	},
	numero: {
		type: String,
		required: true,
	},
	direccion: {
		type: String,
		required: true,
	},
});

export const ClientModel = mongoose.model('Cliente', Schema);
