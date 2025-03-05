import { readCSV } from "../repositories/ReadCsvRepository";
import { CsvModel } from "../models/CsvModel";


export  async function getCsvData(filePath:string):Promise<CsvModel[]>{
     return await readCSV(filePath)
}
