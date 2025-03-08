import { Router } from "express";
import {createCountController,showAllUsers} from '../controllers/CreateCountController'
const countRouter = Router();



countRouter.post('/',createCountController)
countRouter.get('/',showAllUsers)

export {countRouter}