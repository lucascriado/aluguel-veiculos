import mongoose from 'mongoose';

const veiculoSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  placa: { type: String, required: true },
  ano: { type: Number, required: true },
  disponivel: { type: Boolean, default: true },
});

export const Veiculo = mongoose.model('veiculos', veiculoSchema);
