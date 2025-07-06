import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  nome: { type: String, required: true, unique: true },
  endereco: { type: String, required: true },
  cpf: { type: Number, default: true, unique: true },
});

export const Usuario = mongoose.model('usuarios', usuarioSchema);