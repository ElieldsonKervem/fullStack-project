import { Request,Response } from "express";


export function csvFileUpload(request:Request,response:Response):void{
    
    if(!request.file){
        response.json({error:"Precisa enviar um csv"}).status(400);
        return;
    }

     response.status(200).json({  message: 'Arquivo enviado com sucesso!',
        file: request.file})
     return;
       
}