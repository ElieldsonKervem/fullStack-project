import { Request,Response } from "express";
import { getCsvData } from "../services/CreateReadCsvService";
import { CsvModel } from "../models/CsvModel";
import path from 'path';

export async function readCsvController(request:Request,response:Response){
    try{
        const filePath = path.join(__dirname,"../uploads/csv/dados.csv")
        console.log(filePath)
        const data:CsvModel[] = await getCsvData(filePath)
        response.status(200).json(data)
    }
    catch(error){
        response.status(500).json(error)
    }
}