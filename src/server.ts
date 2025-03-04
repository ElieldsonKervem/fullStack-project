import express from 'express';

const app = express();
const port: number = 3002;
import {router} from './routes/index'

app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Projeto rodando na porta ${port}`);
});
