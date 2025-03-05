import { Router } from "express";
import csvUpload from "../middlewares/csvUpload";
import { csvFileUpload } from "../controllers/CsvUploadController";


const csvRouter = Router();

csvRouter.post('/',csvUpload.single("file"),csvFileUpload)

export {csvRouter}