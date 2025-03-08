import { Request, Response } from "express";
import { createSpecifications,listSpecification } from "../services/CreateSpecificationsService";

export async function createSpecificationsController(request:Request,response:Response):Promise<void>{
     const {id,name,description} = request.body;
     const result = await createSpecifications({id,name,description})

     if(result.error){
        response.status(409).json({ error: result.error });
        return;
     }

     response.status(200).json({specification:result.specification})

     return;

}
export async function  listSpecifications(request:Request,response:Response):Promise<void>{
    const specifications = await listSpecification();
    response.json(specifications)
    return;
}

