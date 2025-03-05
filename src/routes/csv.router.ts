import { Router } from "express";
import csvUpload from "../middlewares/csvUpload";
import { csvFileUpload } from "../controllers/CsvUploadController";
import {readCsvController} from "../controllers/CsvReadControoler";
import { importCsvSpecificationsController } from "../controllers/ImportCsvSpecificationsController"; // novo controller
import verifyIdExist from '../middlewares/middlewares'


const csvRouter = Router();

csvRouter.post('/',csvUpload.single("file"),csvFileUpload)
csvRouter.get('/', readCsvController)
csvRouter.post('/import',verifyIdExist,importCsvSpecificationsController)
export {csvRouter}