import { Router } from "express";
import upload from "../middlewares/upload";
import { fileUploadController } from "../controllers/FileUploadController";

const fileRouter = Router();

fileRouter.post('/',upload.single("file"),fileUploadController)

export {fileRouter};