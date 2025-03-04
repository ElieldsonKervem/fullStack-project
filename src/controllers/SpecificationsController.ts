import { Request, Response } from "express";
import { createSpecifications,listSpecification } from "../services/CreateSpecificationsService";

export function createSpecificationsController(request:Request,response:Response):void{
     const {id,name,description} = request.body;
     const result = createSpecifications({id,name,description})

     if(result.error){
        response.status(409).json({ error: result.error });
        return;
     }

     response.status(200).json({specification:result.specification})

     return;

}
export function listSpecifications(request:Request,response:Response):void{
    const specifications = listSpecification();
    response.json(specifications)
    return;
}

