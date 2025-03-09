import { Router } from "express";
import { createCountController, showAllUsers } from '../controllers/CreateCountController';
import { authVerifyMiddleware } from '../middlewares/authVerifyMiddleware'; // Importando corretamente

const countRouter = Router();

countRouter.post('/', createCountController);
countRouter.get('/', authVerifyMiddleware, showAllUsers); // Usando o middleware na rota

export { countRouter };
