import express from 'express';
import dotenv from 'dotenv';
import veiculosRoutes from './routes/Veiculo.routes';
import usuarioRoutes from './routes/Usuario.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/veiculo', veiculosRoutes);
app.use('/usuario', usuarioRoutes);

export default app;
