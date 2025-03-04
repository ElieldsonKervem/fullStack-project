import Specifications from "../models/SpecificationsModel";
import { addSpefications,findSpecificationByName,  listSpecification as listSpecificationRepo} from "../repositories/SpecificationsRepository";

export function createSpecifications({id,name,description}:Omit<Specifications,'created_at'>):{error?:string,specification?:Specifications}{
     const existingSpecifications = findSpecificationByName(name)

     if(existingSpecifications){
        return { error: "Especificação já existe" };
     }
     const specification:Specifications = {
        id,
        name,
        description,
        created_at: new Date().toISOString()
     }
     addSpefications(specification);

     return {specification}

} 

export function listSpecification(){
   return listSpecificationRepo()
}