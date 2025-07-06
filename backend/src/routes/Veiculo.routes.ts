import express, { Request, Response } from 'express';
import { Veiculo } from '../models/Veiculo';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const veiculos = await Veiculo.find({});
  res.json(veiculos);
});

router.post('/', async (req: Request, res: Response) => {
  const veiculo = new Veiculo(req.body);
  await veiculo.save();
  res.status(201).json(veiculo);
});

export default router;
