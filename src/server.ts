import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerFile  from './swagger.json'
const app = express();
const port: number = 3002;
import {router} from './routes/index'

import dotenv from 'dotenv';
dotenv.config();

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(
    swaggerFile
))
app.use(express.json());
app.use(router)

app.listen(port, () => {
    console.log(`Projeto rodando na porta ${port}`);
});
