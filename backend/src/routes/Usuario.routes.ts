import express, { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const usuarios = await Usuario.find({});
  res.json(usuarios);
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { usuario, nome, cpf  } = req.body;

    const hasUser = await Usuario.findOne({
      $or: [{ usuario }, { nome }, { cpf }]
    });

    if (hasUser) {
      return res.status(400).json({
        erro: 'Usuário, nome ou CPF já cadastrado, tente novamente.'
      });
    }

    const newUser = new Usuario(req.body);
    await newUser.save();

    res.status(201).json(newUser);

  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar usuário', msg: err });
  }
});

export default router;
