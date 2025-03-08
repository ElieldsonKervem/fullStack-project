import { addSpecifications,findSpecificationByName,  listSpecifications as listSpecificationRepo} from "../repositories/SpecificationsRepository";
import { Specifications } from "@prisma/client";

export async function createSpecifications({id,name,description}:Omit<Specifications,'created_at'>):Promise<{error?:string,specification?:Specifications}>{
     const existingSpecifications =  await findSpecificationByName(name)

     if(existingSpecifications){
        return { error: "Especificação já existe" };
     }
     const specification = await addSpecifications({
        id, name, description,created_at:''
     });
    

     return {specification}

} 

export function listSpecification(){
   return listSpecificationRepo()
}