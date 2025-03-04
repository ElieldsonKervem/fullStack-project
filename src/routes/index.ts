import {Router} from 'express'
import { categoriesRouter } from './categories.routes'
import { specifationRouter } from './Specifications.routes'

const router = Router()

router.use('/categories',categoriesRouter)
router.use('/specifications',specifationRouter) 

export{router}

//rota que gerencia todas as outras para deixar o server.js mais organizado