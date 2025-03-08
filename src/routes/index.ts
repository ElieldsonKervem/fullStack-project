import {Router} from 'express'
import { categoriesRouter } from './categories.routes'
import { specifationRouter } from './Specifications.routes'
import {fileRouter} from './filesRouters';
import { csvRouter } from './csv.router';
import { countRouter } from './createCountRouter';
const router = Router()

router.use('/categories',categoriesRouter)
router.use('/specifications',specifationRouter) 
router.use('/upload',fileRouter)
router.use('/csvUpload',csvRouter)
router.use('/import',csvRouter)
router.use('/createAcount',countRouter)
export{router}

//rota que gerencia todas as outras para deixar o server.js mais organizado