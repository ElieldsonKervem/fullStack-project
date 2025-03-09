import { Router } from 'express';
import { login } from '../controllers/AuthoController';

const authRouter = Router();

// Rota POST para /login que chama o controller de login
authRouter.post('/', login);

export { authRouter };
