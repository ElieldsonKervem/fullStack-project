import express from 'express';
import { categoriesRouter } from './routes/categories.routes';
const app = express();
const port: number = 3002;


app.use(express.json());

app.use("/categories",categoriesRouter)

app.listen(port, () => {
    console.log(`Projeto rodando na porta ${port}`);
});
