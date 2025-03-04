import { Router } from "express";
const categoriesRouter = Router();
import verifyIdExist from '../middlewares/middlewares'
import {listCategoriesController,createCategoryController}  from "../controllers/CategoryController";

categoriesRouter.post('/',verifyIdExist,createCategoryController)
categoriesRouter.get('/', verifyIdExist,listCategoriesController)
export {categoriesRouter}