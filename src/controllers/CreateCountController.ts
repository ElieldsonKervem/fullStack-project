import { Request, Response } from "express"
import {createAcount,listUsers} from '../services/CreateCountService'

export async function createCountController(request: Request, response: Response): Promise<void> {
  const { id, name, userName, password, email, isAdmin, driverLicence } = request.body;

  const result = await createAcount({ id, name, userName, password, email, isAdmin, driverLicence });

  if (result.error) {
       response.status(409).json({ message: "Erro na criação da conta", result });
       return;
  }

   response.status(200).json({ message: "Conta criada com sucesso", user: result.user });
   return;
}


export async function showAllUsers(request:Request,response:Response):Promise<void>{
     const counts = await listUsers()
     response.json(counts);
     return;
} 