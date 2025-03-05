import { Request,Response } from "express";
import  path from 'path';
import { getCsvData } from "../services/CreateReadCsvService";
import { createSpecifications } from "../services/CreateSpecificationsService";
import { CsvModel } from "../models/CsvModel";
import { v4 as uuidV4 } from "uuid";
export async function importCsvSpecificationsController(request:Request,response:Response):Promise<void>{
  
    try{
        const filePath = path.join(__dirname, "../uploads/csv/dados.csv");

        const csvData:CsvModel[] = await getCsvData(filePath)

        const importsResult:{error?:string; sprecification?:unknown}[] = [];

        for(const row of csvData){
            if(!row.id){
                row.id = uuidV4()
            }
            const result = createSpecifications({ id: row.id, name: row.name, description: row.description });
            importsResult.push(result);
        }

        response.status(200).json({
            message: "Dados do CSV importados com sucesso",
            results: importsResult,
        })

    }catch (error) {
        response.status(500).json({ error: "Erro ao importar dados do CSV", details: error.message });
      }
}