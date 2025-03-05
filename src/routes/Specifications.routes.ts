import { Router } from "express";
const specifationRouter = Router();
import {createSpecificationsController,listSpecifications} from '../controllers/SpecificationsController'
import verifyIdExist from '../middlewares/middlewares'

specifationRouter.get('/',verifyIdExist,listSpecifications);
specifationRouter.post('/',verifyIdExist,createSpecificationsController )

export {specifationRouter}